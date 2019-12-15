<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>message: {{ message }}</h2>
    <h2>mixinProp: {{ mixinProp }}</h2>
    <h2>computed msg: {{ msg }}</h2>
  </div>
</template>

<script lang="ts">
  import { Component, Mixins, Prop } from 'vue-property-decorator';
  import MixinModule from '@/mixins/MixinModule';

  type TMessage = 'Hello' | 'hello';
  const messages = ['Hello', 'hello'];

  @Component
  export default class HelloWorld extends Mixins(MixinModule) {
    @Prop({
      type: String as () => TMessage, // 不能省略 as () =>
      validator(value: any): boolean {
        return messages.includes(value);
      },
    })
    private message?: TMessage;

    @Prop({
      type: String, // 首字母大写，遵循的是Vue prop的参数类型
      required: true,
    })
    title!: string; // typescript的类型

    // computed 计算属性
    get msg(): string {
      return `${this.message} ${this.mixinProp}`;
    }

    // method
    helloWorldMethod(): void {
      console.log(this.mixinMethod());
      console.log(`Hello World Component title is "${this.title}"`);
    }

    // 生命周期
    beforeCreated() {
      //
    }
    created() {
      //
    }
    beforeMounted() {
      //
    }
    mounted() {
      //
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
