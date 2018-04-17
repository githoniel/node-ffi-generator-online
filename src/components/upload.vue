<template>
  <div class="example-drag">
      <div class="fileNames" v-if="files.length">
        <div v-for="(file) in files" :key="file.id">
          <div>FileName: {{file.name}}</div>
          <div>FileSize: {{file.size}}</div>
          <div>State:
            <span v-if="file.error">{{file.error}}</span>
            <span v-else-if="file.success">success</span>
            <span v-else-if="file.active">active</span>
            <span v-else-if="file.active">active</span>
            <span v-else>ready</span>
          </div>
        </div>
      </div>
      <div class="hint" v-else>
        <div>Drop files anywhere to upload<br/>or</div>
        <label for="file" class="btn-file">Click Me</label>
      </div>

      <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
          <h3>Drop files to upload</h3>
      </div>

      <div class="example-btn">
        <div v-show ="false">
            <file-upload
            class="btn btn-primary"
            post-action="/upload"
            :multiple="false"
            :drop="true"
            :drop-directory="false"
            v-model="files"
            @input-file="inputFile"
            ref="upload">
            <i class="fa fa-plus"></i>
            Select files
            </file-upload>
        </div>
         <el-button type="danger"
             v-if="(!$refs.upload || !$refs.upload.active) && files.length"
            @click.prevent="files = []"
        >
            Reset
            <i class="el-icon-refresh el-icon--right"></i>
        </el-button>
        <el-button type="primary"
             v-if="(!$refs.upload || !$refs.upload.active) && files.length"
            @click.prevent="$refs.upload.active = true"
        >
            Start Upload
            <i class="el-icon-upload el-icon--right"></i>
        </el-button>
      </div>
  </div>
</template>

<style>
.btn-file {
    color: #42b983;
    font-size: 32px;
}
.example-drag {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    height: 100%;
}
.example-drag label.btn {
  color: #fff;
  font-size: 32px;
}

.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.example-drag .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
.example-drag .hint {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-bottom: 30px;
}
.example-drag .hint>div {
    font-size: 32px;
}
.fileNames {
    font-size: 32px;
    margin: 30px 0;
}
</style>

<script>
import FileUpload from 'vue-upload-component'

export default {
    components: {
        FileUpload,
    },
    data() {
        return {
            files: [],
        }
    },
    methods: {
        inputFile(newFile, oldFile) {
            if (newFile && oldFile && !newFile.active && oldFile.active) {
                // 清空
                this.files = []
                if (newFile.xhr) {
                    // 获得响应状态码
                    console.log('status', newFile.xhr.status)
                    if (newFile.xhr.status === 200) {
                        this.$store.commit('setRespText', newFile.xhr.responseText)
                    } else {
                        this.$alert(`Network ErrorCode: ${newFile.xhr.status}`, 'Upload Failed', {
                            confirmButtonText: 'Confirm',
                        })
                    }
                }
            }
        },
    },
}
</script>
