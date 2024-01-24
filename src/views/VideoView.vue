<template>
    <div>
        <v-container>
            <!-- title -->
            <v-row>
                <v-col cols="12">
                    <div class="title-box">
                        <h1 class="my-4">استیریم کردن مدیا پلیر</h1>
                        <h4 class="my-4">توضیحات تسک</h4>
                        <p class="my-4">یک برنامه وب به وسیله vuejs بنویسید که در آن امکان بارگذاری یک ویدئو وجود داشته باشد
                            و همچنین اگر کاربر صفحه را رفرش کرد ادامه ویدئو از جایی که کاربر صفحه را رفرش کرده پخش شود</p>
                    </div>
                </v-col>
            </v-row>
            <!-- btn -->
            <v-row>
                <v-col cols="12">
                    <div class="btn-box">
                        <input type="file" @change="previewVideo" accept="video/*">
                        <v-btn @click="onUpload" color="blue-grey-darken-1">upload</v-btn>
                    </div>
                </v-col>
            </v-row>
            <!-- video -->
            <v-row>
                <v-col>
                    <div class="middle-box">
                        <p v-if="LoadingStatus == true">لطفا منتظر بمانید</p>
                        <video v-else controls :src="video" class="video" ref="videoPlayer"></video>
                    </div>
                </v-col>
            </v-row>
            <!-- description -->
            <v-row>
                <v-col cols="12">
                    <div class="desc-box">
                        <h4 class="my-4">توضیحات روند انجام تسک</h4>
                        <p class="my-4">برای انجام این پروژه از vue3 و فریم ورک vuetify3 استفاده شده است</p>
                        <p>برای ذخیره ویدئوی آپلود شده نیاز به یک فضای ذخیره سازی بود که با توجه به اینکه این پروژه back-end
                            اختصاصی نداشت از یک سرویس جداگانه باید استفاده میشد که در این پروژه از firebase استفاده کردم</p>
                        <p>پس از ذخیره سازی ویدئو، سیستم بطور خودکار شروع به دانلود و پخش ویديو میکند</p>
                        <p>پس از آپلود، لینک ویدئو در مرورگر کاربر به وسیله local storage ذخیره میشود و پس از رفرش کردن صفحه
                            همان ویدئو پخش میشود</p>
                        <p>برای پخش ادامه ویديو از جایی که صفحه رفرش شده نیز از local storage استفاده شده و زمان پخش شده ی
                            ویدئو در مرورگر کاربر ذخیره میشود</p>
                        <p class="mt-2 text-red">با توجه به اینکه استفاده از سیستم firebase در ایران با محدودیت هایی مواجه
                            است، لطفا
                            برای جلوگیری از ایجاد اختلال در فرآیند آپلود ویديو و پخش آن vpn خود را خاموش کنید</p>
                    </div>
                </v-col>
            </v-row>
            <!-- github link -->
            <v-row>
                <v-col cols="12">
                    <div class="py-2 project-link-box">
                        <p class="">منابع پروژه</p>
                        <a href="#" class="my-4 project-link">github.com</a>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
export default {
    data() {
        return {
            videoData: null,
            video: null,
            LoadingStatus: false,
            currentTime: 0
        }
    },
    methods: {
        previewVideo(event) {
            this.video = null
            this.videoData = event.target.files[0]
        },
        onUpload() {
            this.video = null
            const storageRef = ref(storage, `${this.videoData.name}`);
            this.LoadingStatus = true
            uploadBytes(storageRef, this.videoData).then(
                () => {
                    this.LoadingStatus = false
                    getDownloadURL(ref(storage, `${this.videoData.name}`)).then(
                        (download_url) => (this.video = download_url, localStorage.setItem("video", this.video))
                    )
                },)
        },
        saveCurrentTime() {
            // Save the currentTime in localStorage
            localStorage.setItem('videoCurrentTime', this.$refs.videoPlayer.currentTime.toString());
        }
    },
    mounted() {
        const videoUrl = localStorage.getItem("video")
        const savedTime = localStorage.getItem('videoCurrentTime');
        this.video = videoUrl
        if (savedTime) {
            this.currentTime = parseFloat(savedTime);
        }
        this.$refs.videoPlayer.currentTime = this.currentTime;
        window.addEventListener('beforeunload', this.saveCurrentTime);

    }
}
</script>

<style scoped>
.main-card {
    border-radius: 10px;
}

.title-box {
    border-bottom: 1px solid rgb(222, 222, 222);
}

.desc-box {
    border-top: 1px solid rgb(222, 222, 222);
}

.project-link-box {
    border-top: 1px solid rgb(222, 222, 222);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-link {
    color: black;
}

.btn-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.middle-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.video {
    max-width: 40rem;
}
</style>