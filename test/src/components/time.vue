<template>
  <div>
      <el-timeline align="left">
        <el-timeline-item timestamp="2018/4/12" style="height: 50px;">
          <span>更新 Github 模板</span>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" style="height: 50px;">
          <span>更新 Github 模板</span>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" style="height: 50px;">
            <span>更新 Github 模板</span>
        </el-timeline-item>
      </el-timeline>
    <el-button @click="compare">compare</el-button>
  </div>
</template>

<script>
export default {
  name: 'time',
  data () {
    return {
      activities: [{
        content: '支持使用图标',
        timestamp: '2018-04-12 20:46'
      }, {
        content: '支持自定义颜色',
        timestamp: '2018-04-03 20:46'
      }, {
        content: '支持自定义尺寸',
        timestamp: '2018-04-03 20:46'
      }, {
        content: '默认样式的节点',
        timestamp: '2018-04-03 20:46'
      }]
    }
  },
  methods: {
    compare () {
      console.log((new Date(2019, 7, 19) > ''))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-timeline-item__tail {
    left: 100px;
    height: 100%;
  }
  .el-timeline-item__node--normal {
    left: 95px;
  }
  .el-timeline-item__content {
    margin-top: -11px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 85px;
  }
  .el-timeline-item__timestamp {
    margin-right: 0px;
    margin-bottom: 0px;
  }
  .el-timeline-item__timestamp.is-bottom {
     margin-top: -15px
  }
  .el-timeline-item__wrapper {
    position: relative;
    padding-left: 31px;
    top: -2px;
  }
</style>
