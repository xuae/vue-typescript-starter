<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>selectedId： {{ selectedId }}</div>
    <button @click="setSelectedId('2')">Set Selected Id: "2"</button>
    <div>List: {{ list }}</div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import { TestList } from '@/store/test/types';

  const testModule = namespace('test');
  @Component
  export default class About extends Vue {
    @testModule.State('list') list!: TestList[];
    @testModule.State('selectedId') selectedId!: string;
    @testModule.Mutation('setSelectedId') setSelectedId!: Function;
  }
</script>
