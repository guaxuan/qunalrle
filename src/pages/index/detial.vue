<template>
  <div class="detial">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'index-detial',
    props: {
      list: Array,
      default: []
    },
    data () {
      return {}
    },
    mounted () {
      this.scroll = new BScroll('.detial')
    }
  }
</script>

<style lang="stylus" scoped>
  .detial
    overflow: hidden
    height: 1rem
    background: green
</style>