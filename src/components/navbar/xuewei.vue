<template>
  <div>
    <div class="micro-box">
      <div class="header-bar">
        <div class="micro-course" :class="{addborder:isActive1}" @click="is_addborder1"><p><img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrabkvY3or77nqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOTcuMDAwMDAwLCAtMTQ1LjAwMDAwMCkiIGZpbGw9IiM2Mzk5RkIiPgogICAgICAgICAgICA8cGF0aCBkPSJNNDE3LDE4NSBDNDA1Ljk1NDMwNSwxODUgMzk3LDE3Ni4wNDU2OTUgMzk3LDE2NSBDMzk3LDE1My45NTQzMDUgNDA1Ljk1NDMwNSwxNDUgNDE3LDE0NSBDNDI4LjA0NTY5NSwxNDUgNDM3LDE1My45NTQzMDUgNDM3LDE2NSBDNDM3LDE3Ni4wNDU2OTUgNDI4LjA0NTY5NSwxODUgNDE3LDE4NSBaIE00MjQuMDQ5ODAyLDE2OC4xMjQ4MzEgTDQxNy40MDQ1NywxNjguMTI0ODMxIEM0MTYuODM1MDY2LDE2OC4xMjQ4MzEgNDE2LjQ1NTM5NywxNjguNDk5NjYyIDQxNi40NTUzOTcsMTY5LjA2MjkyMiBDNDE2LjQ1NTM5NywxNjkuNjI1MTY5IDQxNi44MzUwNjYsMTcwIDQxNy40MDQ1NywxNzAgTDQyNC4wNDk4MDIsMTcwIEM0MjQuNjIwMzMxLDE3MCA0MjUsMTY5LjYyNTE2OSA0MjUsMTY5LjA2MjkyMiBDNDI1LDE2OC41MDA2NzUgNDI0LjYyMDMzMSwxNjguMTI0ODMxIDQyNC4wNDk4MDIsMTY4LjEyNDgzMSBaIE00MTEuNTE4Njc2LDE2MS4wMDMwMzkgTDQxMCwxNjIuMTI3NTMzIEw0MTIuMjc4MDEzLDE2NC44NDQ1NTIgTDQxMCwxNjcuNDY4MzcgTDQxMS40MjQyNzEsMTY4LjY4NjA2NSBMNDE0LjI3MTc4OCwxNjUuNDk4OTg3IEM0MTQuNTU1MDAxLDE2NS4xMjQxNTYgNDE0LjU1NTAwMSwxNjQuNjU1MTEgNDE0LjI3MTc4OCwxNjQuMjgwMjc5IEw0MTEuNTE2NjIzLDE2MSBMNDExLjUxODY3NiwxNjEuMDAzMDM5IFogTTQwNS44NTY4NTYsMTU2LjgxNzkxNCBMNDI4LjE0MzE0NCwxNTYuODE3OTE0IEw0MjguMTQzMTQ0LDE3My4xODIwODYgTDQwNS44NTY4NTYsMTczLjE4MjA4NiBMNDA1Ljg1Njg1NiwxNTYuODE3OTE0IFogTTQwNCwxNTYuODE3OTE0IEw0MDQsMTczLjE4MjA4NiBDNDA0LDE3NC4xODI0MyA0MDQuODM2MDg3LDE3NSA0MDUuODU2ODU2LDE3NSBMNDI4LjE0MzE0NCwxNzUgQzQyOS4xNjQ5MTcsMTc1IDQzMCwxNzQuMTgyNDMgNDMwLDE3My4xODIwODYgTDQzMCwxNTYuODE3OTE0IEM0MzAsMTU1LjgxODU1MyA0MjkuMTY0OTE3LDE1NSA0MjguMTQzMTQ0LDE1NSBMNDA1Ljg1Njg1NiwxNTUgQzQwNC44MzYwODcsMTU1IDQwNCwxNTUuODE4NTUzIDQwNCwxNTYuODE3OTE0IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt=""> Python全栈开发 · 中级 </p> <span>学完目标薪资：8-12K</span></div>
        <div class="micro-course" :class="{addborder:isActive2}" @click="is_addborder2"><p><img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrabkvY3or77nqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OTIuMDAwMDAwLCAtMTQ1LjAwMDAwMCkiIGZpbGw9IiM0Q0M4RUEiPgogICAgICAgICAgICA8cGF0aCBkPSJNNzEyLDE4NSBDNzAwLjk1NDMwNSwxODUgNjkyLDE3Ni4wNDU2OTUgNjkyLDE2NSBDNjkyLDE1My45NTQzMDUgNzAwLjk1NDMwNSwxNDUgNzEyLDE0NSBDNzIzLjA0NTY5NSwxNDUgNzMyLDE1My45NTQzMDUgNzMyLDE2NSBDNzMyLDE3Ni4wNDU2OTUgNzIzLjA0NTY5NSwxODUgNzEyLDE4NSBaIE03MDMuMjUsMTY5LjkzMzMzMyBMNzAzLjI1LDE2OC42NjY2NjcgTDcyMC43NSwxNjguNjY2NjY3IEw3MjAuNzUsMTY5LjkzMzMzMyBMNzAzLjI1LDE2OS45MzMzMzMgWiBNNzA5LjUsMTczLjczMzMzMyBMNzEwLjM1NDc2OSwxNzIuNDY2NjY3IEw3MTMuNjQ1MzMzLDE3Mi40NjY2NjcgTDcxNC41LDE3My43MzMzMzMgTDcwOS41LDE3My43MzMzMzMgWiBNNzAzLjI1LDE2Ny40IEw3MDMuMjUsMTU3LjI2NjY2NyBMNzIwLjc1LDE1Ny4yNjY2NjcgTDcyMC43NSwxNjcuNCBMNzAzLjI1LDE2Ny40IFogTTcyMC43MzAxNzEsMTU2IEw3MDMuMjY5ODI5LDE1NiBDNzAyLjU3MTQyOSwxNTYgNzAyLDE1Ni42MDAwMDEgNzAyLDE1Ny4zMzMzMjMgTDcwMiwxNzAuMzMzMzEgQzcwMiwxNzEuMDY2NjMyIDcwMi41NzE0MjksMTcxLjY2NjYzMyA3MDMuMjY5ODI5LDE3MS42NjY2MzMgTDcwOC43NDYwNTcsMTcxLjY2NjYzMyBMNzA3Ljc5MzYsMTczLjY2NjY3NyBMNzA2LjQ0NDQ1NywxNzMuNjY2Njc3IEM3MDYuMDk1MiwxNzMuNjY2Njc3IDcwNS44MDk0ODYsMTczLjk2NjY3OCA3MDUuODA5NDg2LDE3NC4zMzMyNzkgQzcwNS44MDk0ODYsMTc0LjY5OTk5OSA3MDYuMDk1MiwxNzUgNzA2LjQ0NDQ1NywxNzUgTDcxNy41Mzk2NTcsMTc1IEM3MTcuODg4OTE0LDE3NSA3MTguMTc0NjI5LDE3NC42OTk5OTkgNzE4LjE3NDYyOSwxNzQuMzMzMjc5IEM3MTguMTc0NjI5LDE3My45NjY2NzggNzE3Ljg4ODkxNCwxNzMuNjY2Njc3IDcxNy41Mzk2NTcsMTczLjY2NjY3NyBMNzE2LjE5MDUxNCwxNzMuNjY2Njc3IEw3MTUuMjM4MDU3LDE3MS42NjY2MzMgTDcyMC43MzAxNzEsMTcxLjY2NjYzMyBDNzIxLjQyODU3MSwxNzEuNjY2NjMzIDcyMiwxNzEuMDY2NjMyIDcyMiwxNzAuMzMzMzEgTDcyMiwxNTcuMzMzMzIzIEM3MjIsMTU2LjYwMDAwMSA3MjEuNDI4NTcxLDE1NiA3MjAuNzMwMTcxLDE1NiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
          alt=""> Python全栈开发 · 高级 </p> <span>学完目标薪资：15-25K</span></div>
        <div class="micro-course" :class="{addborder:isActive3}" @click="is_addborder3"><p><img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlrabkvY3or77nqIsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05ODYuMDAwMDAwLCAtMTQ2LjAwMDAwMCkiIGZpbGw9IiNGRUQxMDAiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAwNiwxODYgQzk5NC45NTQzMDUsMTg2IDk4NiwxNzcuMDQ1Njk1IDk4NiwxNjYgQzk4NiwxNTQuOTU0MzA1IDk5NC45NTQzMDUsMTQ2IDEwMDYsMTQ2IEMxMDE3LjA0NTY5LDE0NiAxMDI2LDE1NC45NTQzMDUgMTAyNiwxNjYgQzEwMjYsMTc3LjA0NTY5NSAxMDE3LjA0NTY5LDE4NiAxMDA2LDE4NiBaIE0xMDAxLjIsMTY1LjQgTDk5OCwxNjUuNCBMOTk4LDE3NSBMMTAwNy42LDE3NSBMMTAwNy42LDE3MS44IEwxMDAxLjIsMTcxLjggTDEwMDEuMiwxNjUuNCBaIE0xMDE0LDE1OSBMOTk4LDE1OSBMOTk4LDE2My44IEwxMDAxLjIsMTYzLjggTDEwMDEuMiwxNjIuMiBMMTAxMC44LDE2Mi4yIEwxMDEwLjgsMTcxLjggTDEwMDkuMiwxNzEuOCBMMTAwOS4yLDE3NSBMMTAxNCwxNzUgTDEwMTQsMTU5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          alt=""> Linux自动化运维 · 中级 </p> <span>学完目标薪资：8-12K</span></div>
        <div class="micro-course" :class="{addborder:isActive4}" @click="is_addborder4"><p><img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWtpuS9jeivvueoiy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3OS4wMDAwMDAsIC0xODcuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc5LjAwMDAwMCwgMTg3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC1Db3B5LTMiIGZpbGw9IiNGQTYyNDAiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGludXhmb3VuZGF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDEyLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMuMiw2LjQgTDMuMiwxMi44IEw5LjYsMTIuOCBMOS42LDE2IEwwLDE2IEwwLDYuNCBMMy4yLDYuNCBaIE0xNiwwIEwxNiwxNiBMMTEuMiwxNiBMMTEuMiwxMi44IEwxMi44LDEyLjggTDEyLjgsMy4yIEwzLjIsMy4yIEwzLjIsNC44IEwwLDQuOCBMMCwwIEwxNiwwIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
          alt=""> Linux自动化运维 · 高级 </p> <span>学完目标薪资：10-15K</span></div>
      </div>
    </div>
    <div class="menu-box">
      <el-tabs class="menu" v-model="activeName">
        <el-tab-pane label="课程详情" name="first">
          <course_detail></course_detail>
        </el-tab-pane>

        <el-tab-pane label="课程章节" name="second">
          <course_section></course_section>
        </el-tab-pane>
        <el-tab-pane label="师资力量" name="third">
          <about_us></about_us>
        </el-tab-pane>
        <el-tab-pane label="学员故事" name="fourth">
          <about_student></about_student>
        </el-tab-pane>
        <el-tab-pane label="我的同学" name="fifth">
          <my_classmate></my_classmate>
        </el-tab-pane>
        <el-tab-pane label="就业喜报" name="sixth">
          <employment></employment>
        </el-tab-pane>
        <el-tab-pane label="常见问题" name="seventh">
          <question></question>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>


<script>
  import course_detail from "../xuewei/course_detail"
  import course_section from "../xuewei/course_section"
  import about_student from "../xuewei/about_student"
  import about_us from "../xuewei/about_us"
  import employment from "../xuewei/employment"
  import my_classmate from "../xuewei/my_classmate"
  import question from "../xuewei/question"

  export default {
    name: "xuewei",
    data() {
      return {
        activeName: "first",
        isActive1:false,
        isActive2:false,
        isActive3:false,
        isActive4:false,
      }
    },
    methods:{
      is_addborder1:function () {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false
      },
      is_addborder2:function () {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
        this.isActive4 = false
      },
      is_addborder3:function () {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
        this.isActive4 = false
      },
      is_addborder4:function () {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = true
      }
    },
    components: {
      course_detail: course_detail,
      course_section: course_section,
      question: question,
      my_classmate: my_classmate,
      employment: employment,
      about_us: about_us,
      about_student: about_student,

    }
  }
</script>

<style scoped>
  .micro-box {
    width: 100%;
    height: 172px;
    text-align: center;
  }

  .header-bar {
    margin: 0 5%;
    height: 172px;
    background-color: #f5f7f9;
  }

  .micro-course {
    width: 240px;
    height: 112px;
    display: inline-block;
    margin: 30px 10px 15px;
    background-color: #fff;
    text-align: center;
    border-radius: 10px;
  }
  .addborder{
    border: deepskyblue 2px solid;
  }

</style>
<style>
  #tab-first {
    padding-left: 7%;
  }

  .menu-box {
    width: 100%;
    text-align: center;
  }

  .el-tabs__nav-wrap {
    margin-top: 20px;
    width: 100%;
    background-color: #f5f7f9;
    border-radius: 15px;
  }

  .el-tabs__nav-scroll {
    height: 80px;
    line-height: 80px;
    padding: 0;
  }

  .el-tabs__item {
    font-size: 18px;
    padding: 0 7%;
  }

  .el-tabs__nav-wrap::after {
    background-color: #fff
  }
</style>
