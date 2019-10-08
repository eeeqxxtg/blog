<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="svg-container">
      <svg
        :width="svgWidth"
        :height="svgHeight"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="qPath" fill="none" stroke="rgba(0, 215, 251, 1)" :stroke-width="qLineWidth" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private svgWidth: number = 1000;
  private svgHeight: number = 500;

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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
