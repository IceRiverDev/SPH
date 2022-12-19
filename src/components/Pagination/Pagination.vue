<template>
  <div class="pagination">

    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">上一页</button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)" :class="{active: pageNo == 1}">1</button>
    <button v-if="startNumAndEndNum.start > 2">···</button>
    <button v-for="(page, index) in startNumAndEndNum.end" :key="index" :class="{active: pageNo === page}"
            v-if="page >= startNumAndEndNum.start"
            @click="$emit('getPageNo', page)">{{ page }}
    </button>
    <button v-if="startNumAndEndNum.end < totalPages - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPages">{{ totalPages }}</button>
    <button :disabled="pageNo === totalPages" @click="$emit('getPageNo', pageNo + 1)">下一页</button>
    <button style="margin-left: 30px">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"], //
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum() {
      let start = 0, end = 0
      if (this.continues > this.totalPages) {
        start = 1
        end = this.totalPages
      } else {
        start = this.pageNo - ((this.continues - 1) / 2) // 这里不能写死
        end = this.pageNo + ((this.continues - 1) / 2)   // 这里不能写死
        if (start < 1) { // 考虑边界情况
          start = 1
          end = this.continues
        } else if (end > this.totalPages) { // 考虑边界情况
          start = this.totalPages - this.continues + 1
          end = this.totalPages
        }
      }

      return {start, end}
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
