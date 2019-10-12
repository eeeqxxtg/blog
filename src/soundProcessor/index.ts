import { aWeighting as uAWeight, gauss } from './utils';

export interface ISoundProcessor {
  filterParams?: { mu: number, sigma: number, filterRadius: number };
  sampleRate: number; // 采样率
  fftSize: number;
  startFrequency?: number;
  endFrequency?: number;
  outBandsQty: number; // 输出的频带数
  tWeight?: boolean;
  aWeight?: boolean;
}

export const defaultSoundProcessorOptions: Required<ISoundProcessor> = {
  filterParams: {
    mu: 0,
    sigma: 1,
    filterRadius: 2,
  },
  sampleRate: 48000,
  fftSize: 1024,
  startFrequency: 0,
  endFrequency: 10000,
  outBandsQty: 81,
  tWeight: true,
  aWeight: true,
};

export interface IBand {
  lowerFrequency: number;
  upperFrequency: number;
}

export function SoundProcessor(soundProcessoroptions: ISoundProcessor) {
  const options = {
    ...defaultSoundProcessorOptions,
    ...soundProcessoroptions,
  };

  const bandsQty = Math.floor(options.fftSize / 2); // 频带数
  const bandwidth = options.sampleRate / options.fftSize; // 带宽

  const historyLimit = 5;
  const history: any[] = [];

  const aWeights = initWeights();
  function initWeights() {
    const ret: number[] = [];
    for (let i = 0; i < bandsQty; i++) {
      ret.push(uAWeight(i * bandwidth));
    }
    return ret;
  }


  const bands = initBands();
  function initBands() {
    const { endFrequency, startFrequency, outBandsQty } = options;

    const ret: IBand[] = [];
    // 根据起止频谱、频带数量确定倍频数: N
    // fu = 2^(1/N)*fl  => n = 1/N = log2(fu/fl) / bandsQty
    let n = Math.log2(endFrequency / startFrequency) / outBandsQty;
    // n = 2^(1/N)
    n = Math.pow(2, n);

    const nextBand: IBand = {
      lowerFrequency: Math.max(startFrequency, 0),
      upperFrequency: 0,
    };

    for (let i = 0; i < outBandsQty; i++) {
      // 频带的上频点是下频点的2^n倍
      const upperFrequency = nextBand.lowerFrequency * n;
      nextBand.upperFrequency = Math.min(upperFrequency, endFrequency);

      ret.push({ ...nextBand });
      nextBand.lowerFrequency = upperFrequency;
    }

    return ret;

  }

  const gKernel = initGaussKernel();
  function initGaussKernel() {
    const { filterParams } = options;
    const { mu, sigma, filterRadius } = filterParams;

    const radius = filterRadius;

    const ret: number[] = [];
    for (let i = -radius; i < 1; i++) {
      // step=1
      ret.push(gauss(i, sigma, mu));
    }

    for (let i = radius - 1; i > -1; i--) {
      // 对称
      ret.push(ret[i]);
    }

    return ret;

  }

  const gKernelSum = gKernel.reduce((prev, curr) => prev + curr);


  function filter(frequencies: number[]) {
    const { filterRadius } = options.filterParams;

    // 滤波
    for (let i = 0; i < frequencies.length; i++) {
      let count = 0;
      for (let j = i - filterRadius; j < i + filterRadius; j++) {
        const value = frequencies[j] !== undefined ? frequencies[j] : 0;
        count += value * gKernel[j - i + filterRadius];
      }

      frequencies[i] = (count / gKernelSum);
    }
  }

  function aWeighting(frequencies: number[]) {
    for (let i = 0; i < frequencies.length; i++) {
      if (aWeights[i] !== undefined) {
        frequencies[i] = frequencies[i] * aWeights[i];
      }
    }
  }

  function divide(frequencies: number[]) {
    const { outBandsQty } = options;
    const temp = new Array(outBandsQty);

    for (let i = 0; i < bands.length; i++) {
      const band = bands[i];
      const startIndex = Math.floor(band.lowerFrequency / bandwidth);
      const endIndex = Math.min(
        Math.floor(band.upperFrequency / bandwidth),
        frequencies.length - 1,
      );

      let count = 0;
      // 均方值
      for (let j = startIndex; j <= endIndex; j++) {
        count += frequencies[j] * frequencies[j];
      }
      temp[i] = Math.sqrt(count / (endIndex + 1 - startIndex));
    }
    return temp;
  }

  function timeWeighting(frequencies: number[]) {
    if (history.length < 5) {
      history.push(frequencies.slice(0));
    } else {
      history.pop();
      history.unshift(frequencies.slice(0));
      for (let i = 0; i < frequencies.length; i++) {
        let count = 0;
        for (let j = 0; j < historyLimit; j++) {
          count += history[j][i] / historyLimit;
        }
        frequencies[i] = count;
      }
    }
  }

  function process(frequencies: number[]) {
    // 1. filter
    filter(frequencies);

    // 2. time weight
    if (options.tWeight) {
      timeWeighting(frequencies);
    }

    // 3. a weight
    if (options.aWeight) {
      aWeighting(frequencies);
    }

    // 4. spectrum divide
    return divide(frequencies);
  }

  return { process };

}

