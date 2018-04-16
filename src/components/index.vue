<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">Node-FFI Generate Online</el-menu-item>
        </el-menu>
        <el-row class="color-bk">
            <el-col :span="24" class="desc">
                <div>Thanks to tjfontaine's awesome project
                    <a href="https://github.com/tjfontaine/node-ffi-generate">
                        node-ffi-generate !
                    </a>
                </div>
            </el-col>
            <el-col :span="6" ref="left">
                <div class="box" ref="articulation"></div>
            </el-col>
            <el-col :span="18" ref="right">
                <upload-box></upload-box>
            </el-col>
        </el-row>
        <transition name="el-zoom-in-top">
            <el-row class="result" v-if="respText">
                <el-col :span="24">
                    <pre>{{respText}}</pre>
                </el-col>
            </el-row>
        </transition>
    </div>
</template>

<script>
import lottie from 'lottie-web'
import upload from './upload'

export default {
    name: 'HelloWorld',
    components: {
        'upload-box': upload,
    },
    data() {
        return {
            activeIndex: '1',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
        }
    },
    computed: {
        respText() {
            return this.$store.state.respText
        },
    },
    mounted() {
        const elem = this.$refs.articulation
        const animData = {
            container: elem,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
                progressiveLoad: true,
                preserveAspectRatio: 'xMidYMid meet',
            },
            path: './static/articulation.json',
        }
        const anim = lottie.loadAnimation(animData)
        anim.setSubframe(false)
        anim.addEventListener('enterFrame', () => {
            const height = this.$refs.left.$el.clientHeight
            this.$refs.right.$el.style.height = `${height}px`
            anim.removeEventListener('enterFrame')
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-menu-item {
    font-size: 24px;
}
.color-bk {
   background-color: #444;
}
.result {
    background-color: #222;
    color: #eee;
    font-size: 32px;
    padding: 30px;
    text-align: left;
    max-height: 200px;
}
.desc {
    background-color: #666;
    color: #eee;
    font-size: 32px;
    padding: 30px;
}
.desc a {
    color: #42b983
}
.box {
    background-color: #444;
    color: #fff;
    padding: 4px;
}
.file-form {
    padding: 50px;
}
.el-form-item__label {
    color: #fff;
}
</style>
