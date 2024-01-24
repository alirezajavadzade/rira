<template>
  <div>
    <v-container>
      <!-- title -->
      <v-row>
        <v-col cols="12">
          <div class="title-box">
            <h1 class="my-4">صفحه مقالات</h1>
            <h4 class="my-4">توضیحات تسک</h4>
            <p class="my-4">یک برنامه تحت وب بوسیله Vuejs که لیستی از مقالات را نشان دهد. یک pagination بسازید که کاربر
              بتواند بین
              صفحات جابجا شود و تعداد آیتم های هر صفحه را انتخاب کند</p>
          </div>
        </v-col>
      </v-row>
      <!-- cards -->
      <v-row>
        <v-col cols="12" md="3" v-for="(item, i) in displayedItems" :key="i">
          <v-card class="pa-2 main-card">
            <v-img :src="item.images" aspect-ratio="16/9"></v-img>
            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ item.description }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange-lighten-2" variant="text">
                مشاهده
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- pagination -->
      <v-row>
        <v-col sm="12" md="10">
          <v-pagination v-model="page" :length="totalPages" prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"></v-pagination>
        </v-col>
        <v-col sm="12" md="2">
          <v-select chips label="تعداد در صفحه" :items=itemPerPage density="compact"
            @update:modelValue="selectPerPageCount"></v-select>
        </v-col>
      </v-row>
      <!-- description -->
      <v-row>
        <v-col cols="12">
          <div class="desc-box">
            <h4 class="my-4">توضیحات روند انجام تسک</h4>
            <p class="my-4">برای انجام این پروژه از vue3 و فریم ورک vuetify3 استفاده شده است</p>
            <p>برای نشان دادن مقالات، از حلقه v-for برای نشان دادن اطلاعات هر مقاله استفاده کردم</p>
            <p>برای ساختن pagination و لیست تعداد در صفحه هم از متد های جاوااسکریپتی indexOf() و slice() استفاده کردم</p>
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

export default {
  name: 'CardView',
  data: () => ({
    itemPerPage: [2, 4, 5, 6],
    selectedPage: 1,
    page: 1,
    slicedItems: [],
    card: [
      {
        title: 'مقاله 1',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article1.jpg'
      },
      {
        title: 'مقاله 2',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article2.jpg'
      },
      {
        title: 'مقاله 3',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article3.jpg'
      },
      {
        title: 'مقاله 4',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article4.jpg'
      },
      {
        title: 'مقاله 5',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article5.jpg'
      },
      {
        title: 'مقاله 6',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article6.jpg'
      },
      {
        title: 'مقاله 7',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article7.jpg'
      },
      {
        title: 'مقاله 8',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        images: '../assets/images/article8.jpg'
      },
    ]
  }),
  created() {
    this.updateSlicedItems();
  },
  methods: {
    selectPerPageCount(selectedValue) {
      const itemsPerPage = parseInt(selectedValue);
      this.selectedPage = this.itemPerPage.indexOf(itemsPerPage);
      this.page = 1;
      this.updateSlicedItems();
    },
    updateSlicedItems() {
      const itemsPerPage = this.itemPerPage[this.selectedPage];
      const startIndex = (this.page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      this.slicedItems = this.card.slice(startIndex, endIndex);
    }
  },
  computed: {
    totalPages() {
      const itemsPerPage = this.itemPerPage[this.selectedPage];
      return Math.ceil(this.card.length / itemsPerPage);
    },
    displayedItems() {
      return this.slicedItems;
    },
  },
  watch: {
    page() {
      this.updateSlicedItems();
    }
  }
};
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

.project-link-box{
  border-top: 1px solid rgb(222, 222, 222);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-link {
  color: black;
}
</style>