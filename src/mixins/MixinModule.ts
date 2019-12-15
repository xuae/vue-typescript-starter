import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MixinModule extends Vue {
  @Prop({
    type: String,
  })
  mixinProp?: string;

  mixinMethod(): string {
    return `prop mixin param mixinProp value is "${this.mixinProp}"`;
  }
}
