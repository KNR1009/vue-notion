<template>
  <div class="main-page">
    <div class="left-menu">
      <!-- ノートリスト -->
      <NoteItem
        v-for="note in noteList"
        v-bind:key="note.id"
        v-bind:note="note"
        @delete="onDeleteNote"
      />
      <!-- ノートの追加ボタン -->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square"></i>ノートを追加
      </button>
    </div>
    <div class="right-view">右ビュー</div>
  </div>
</template>

<script>
import NoteItem from "@/components/parts/NoteItem.vue";
export default {
  data() {
    return {
      noteList: [],
    };
  },
  methods: {
    onClickButtonAdd: function () {
      this.noteList.push({
        id: new Date().getTime().toString(16),
        name: `新規ノート`,
        mouseover: false,
      });
    },
    onDeleteNote: function (deleteNote) {
      const index = this.noteList.indexOf(deleteNote);
      this.noteList.splice(index, 1);
    },
  },
  components: {
    NoteItem,
  },
};
</script>

<style scoped lang="scss">
button.transparent {
  margin: 5px;
  background: transparent;
  border: none;
}
.main-page {
  display: flex;
  height: calc(100vh - 60px);
}
.left-menu {
  width: 350px;
  background-color: #f7f6f3;
}
.right-view {
  flex-grow: 1;
  padding: 10px;
}
</style>
