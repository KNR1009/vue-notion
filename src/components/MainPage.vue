<template>
  <div class="main-page">
    <div class="left-menu" @click.self="onEditNoteEnd()">
      <!-- ノートリスト -->
      <NoteItem
        v-for="note in noteList"
        v-bind:key="note.id"
        v-bind:note="note"
        @delete="onDeleteNote"
        @editStart="onEditNoteStart"
        @editEnd="onEditNoteEnd"
        @AddChild="onAddChildNote"
      />
      <!-- ノートの追加ボタン -->
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square"></i>ノートを追加
      </button>
    </div>
    <div class="right-view" @click.self="onEditNoteEnd()">右ビュー</div>
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
        editing: false,
        children: [],
      });
    },
    onDeleteNote: function (deleteNote) {
      const index = this.noteList.indexOf(deleteNote);
      this.noteList.splice(index, 1);
    },
    onEditNoteStart: function (editNote) {
      for (let note of this.noteList) {
        note.editing = note.id === editNote.id;
      }
    },
    onEditNoteEnd: function () {
      for (let note of this.noteList) {
        note.editing = false;
      }
    },
    onAddChildNote: function (note) {
      note.children.push({
        id: new Date().getTime().toString(16),
        name: `${note.name}の子ノート`,
        mouseover: false,
        editing: false,
        children: [],
      });
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
