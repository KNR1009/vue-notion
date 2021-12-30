<template>
  <div class="directive-page">
    <h2>学習2：ディレクティブ</h2>
    <input type="checkbox" v-model="checked" />
    <span v-show="checked">チェックの時だけ見えるよ</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style scoped>
.directive-page {
  padding: 20px;
}
</style>
