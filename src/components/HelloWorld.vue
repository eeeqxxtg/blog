<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="svg-container">
      <svg
        width="100%"
        height="100%"
        class="canvas-svg"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="qPath" fill="none" stroke="rgba(0, 215, 251, 1)" :stroke-width="qLineWidth" />
        <path :d="heartPath" fill="none" stroke="rgba(255, 0, 0, 1)" stroke-width="4" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

// x [0, 1] y [0, 1]
const heartSin = (i: number = 10) => (x: number) => {
  const t = Math.sqrt(3.3);
  const s =  t * (x * 2 - 1);
  const pV = Math.pow(Math.abs(s), 2 / 3);
  const sV = 0.9 * Math.sqrt(3.3 - s * s) * Math.sin(Math.PI * s * i);
  return (pV + sV + 1.5) * 0.25;
};

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private svgWidth: number = 1024;
  private svgHeight: number = 1024;

  private qLineWidth: number = 2;

  get qPath() {
    const R = 0;
    const half = this.qLineWidth / 2;
    const points: string[] = [];

    points.push(`M${R} ${half}`);
    points.push(`L${this.svgWidth - R} ${half}`);

    points.push(`M${this.svgWidth} ${R}`);
    points.push(`L${this.svgWidth} ${this.svgHeight - R}`);

    points.push(`M${this.svgWidth - R} ${this.svgHeight - half}`);
    points.push(`L${R} ${this.svgHeight - half}`);

    points.push(`M${0} ${this.svgHeight - R}`);
    points.push(`L${0} ${R}`);

    return points.join(' ');
  }

  get heartPath() {
    const points: string[] = [];

    const totalWidth = this.svgWidth;
    const totalHeight = this.svgHeight;
    const sin = (x: number) => (1 - heartSin()(x)) * totalHeight;

    for (let i = 0; i < totalWidth; i++) {
      const x = i / totalWidth;
      if (i === 0) {
        points.push(`M${i} ${sin(x)}`);
      } else {
        points.push(`L${i} ${sin(x)}`);
      }
    }

    return points.join(' ');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.svg-container {
  padding: 0 16px;
  .canvas-svg {
    display: block;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
