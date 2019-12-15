<template>
  <div class="home">
    <HelloWorld
      title="Welcome to Your Vue.js App"
      message="hello"
      mixin-prop="world"
      ref="HelloWorldRef"
    />
  </div>
</template>

<script lang="ts">
  // @ is an alias to /src
  import { Component, Ref, Vue } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {
    @Ref() readonly HelloWorldRef!: HelloWorld;
    // 或
    // $refs!: {
    //   HelloWorldRef: HelloWorld,
    // }

    // 生命周期
    mounted() {
      const HelloWorldRef: any = this.$refs.HelloWorldRef; // 必须设置为any类型，取消typescript的错误提示。
      HelloWorldRef.helloWorldMethod();
    }
  }
</script>
