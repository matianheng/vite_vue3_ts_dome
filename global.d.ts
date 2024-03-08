declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
  }
  /**找不到模块“*.vue”或其相应的类型声明。ts(2307)  import flowChart from '@/packages/antx6/src/flowChart.vue'  引用报错*/