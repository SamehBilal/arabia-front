<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header.vue";
import appConfig from "@/app.config.json";
import Slider from '@vueform/slider'

import "@vueform/slider/themes/default.css";
/**
 * Products Component
 */
export default {
  page: {
    title: "Product",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: {
    Layout,
    PageHeader,
    Slider
  },
  data() {
    return {
      title: "Talents",
      items: [
        {
          text: "Dashboard"
        },
        {
          text: "Talents",
          active: true
        }
      ],
      sliderPrice: 800,
      format: {
        prefix: '$',
        decimals: 2
      }

    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-header bg-transparent border-bottom">
            <h5 class="mb-0">Filters</h5>
          </div>

          <div class="card-body">
            <h5 class="font-size-14 mb-3">Types</h5>

            <BAccordion class="accordion ecommerce" id="accordionExample">
              <BAccordionItem class="mb-3">
                <template #title>
                  <i class="mdi mdi-menu font-size-16 align-middle me-2"></i> All Talents
                </template>
                <!-- <BAccordionBody>
                  <ul class="list-unstyled categories-list mb-0">
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Gym equipment</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Yoga mat</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Dumbbells</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Protein supplements</a></li>
                  </ul>
                </BAccordionBody> -->
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="mdi mdi-youtube-tv font-size-16 align-middle me-2"></i> Influencers
                </template>
                <!-- <BAccordionBody>
                  <ul class="list-unstyled categories-list mb-0">
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Mobile</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Mobile accessories</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Computers</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Laptops</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Speakers</a></li>
                  </ul>
                </BAccordionBody> -->
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="mdi mdi-human font-size-16 align-middle me-2"></i> Cosplayers
                </template>
                <!-- <BAccordionBody>
                  <ul class="list-unstyled categories-list mb-0">
                    <li class="active"><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Clothing</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Footwear</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Watches</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Sportswear</a></li>
                  </ul>
                </BAccordionBody> -->
              </BAccordionItem>
              <BAccordionItem>
                <template #title>
                  <i class="mdi mdi-camera-gopro font-size-16 align-middle me-2"></i> On-Air
                </template>
                <!-- <BAccordionBody>
                  <ul class="list-unstyled categories-list mb-0">
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Clothing</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Footwear</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Toys</a></li>
                    <li><a href="#"><i class="mdi mdi-circle-medium me-1"></i> Baby care</a></li>
                  </ul>
                </BAccordionBody> -->
              </BAccordionItem>
              
            </BAccordion>

          </div>

          <!-- <div class="card-body border-top">
            <div>
              <h5 class="font-size-14 mb-4">Price</h5>
              <Slider v-model="sliderPrice" :min="0" :max="1000" :format="format" />
            </div>
          </div> -->

          <div class="custom-accordion">
            <!-- <div class="card-body border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a href="javascript:void(0);" class="text-reset d-block" v-b-toggle.discount>
                    Discount
                    <i class="mdi mdi-minus float-end accor-plus-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="discount">

                  <div class="mt-4">
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio6" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio6">50% or more</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio5" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio5">40% or more</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio4" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio4">30% or more</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio3" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio3">20% or more</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio2" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio2">10% or more</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productdiscountRadio1" name="productdiscountRadio1" class="form-check-input">
                      <label class="form-check-label" for="productdiscountRadio1">Less than 10%</label>
                    </div>
                  </div>

                </BCollapse>
              </div>
            </div> -->

            <div class="card-body border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a href="javascript:void(0);" class="text-reset d-block" v-b-toggle.size>Gender
                    <i class="mdi mdi-minus float-end accor-plus-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="size">
                  <div class="mt-4">
                    <div class="form-check mt-2">
                      <input type="radio" id="productsizeRadio1" name="productsizeRadio" class="form-check-input">
                      <label class="form-check-label" for="productsizeRadio1">Male</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productsizeRadio2" name="productsizeRadio" class="form-check-input">
                      <label class="form-check-label" for="productsizeRadio2">Female</label>
                    </div>
                  </div>

                </BCollapse>
              </div>
            </div>

            <div class="card-body border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a href="javascript:void(0);" class="text-reset d-block" v-b-toggle.size>Type
                    <i class="mdi mdi-minus float-end accor-plus-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="size">
                  <div class="mt-4">
                    <div class="form-check mt-2">
                      <input type="radio" id="productsizeRadio11" name="productsizeRadio1" class="form-check-input">
                      <label class="form-check-label" for="productsizeRadio11">Exclusive</label>
                    </div>
                    <div class="form-check mt-2">
                      <input type="radio" id="productsizeRadio23" name="productsizeRadio1" class="form-check-input">
                      <label class="form-check-label" for="productsizeRadio23">Inclusive</label>
                    </div>
                  </div>

                </BCollapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div>
                    <h5>Talents</h5>
                    <ol class="breadcrumb p-0 bg-transparent mb-2">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Talents</a>
                      </li>
                      <li class="breadcrumb-item active">Influencers</li>
                    </ol>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-inline float-md-end">
                    <div class="search-box ms-2">
                      <div class="position-relative">
                        <input type="text" class="form-control rounded" placeholder="Search..." />
                        <i class="mdi mdi-magnify search-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="list-inline my-3 ecommerce-sortby-list">
                <li class="list-inline-item">
                  <span class="fw-medium font-family-secondary">Sort by:</span>
                </li>
                <li class="list-inline-item active">
                  <a href="#">Popularity</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Newest</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Alphabetically</a>
                </li>
              </ul>

              <div class="row no-gutters">
                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <div class="product-ribbon badge bg-warning">Trending</div>
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-1.png" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">35M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">Nour Mar5</h4>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <!-- <div class="product-ribbon badge bg-primary">- 25 %</div> -->
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-2.png" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">17.9M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">
                        Om Sayf
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-3.png" style="height: 223px;" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">13.5M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">
                        RIMA
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-4.png" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">13.2M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">
                        Dgray
                      </h4>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-5.png" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">12.5M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">Million Roses</h4>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <!-- <div class="product-ribbon badge bg-primary">- 22 %</div> -->
                      <div class="product-like">
                        <a href="#">
                          <i class="mdi mdi-pencil-outline"></i>
                        </a>
                      </div>
                      <img src="@/assets/images/product/img-6.png" style="height: 223px;" alt class="img-fluid mx-auto d-block" />
                    </div>

                    <div class="text-center">
                      <p class="font-size-12 mb-1">Total Fans</p>
                      <h5 class="font-size-15">
                        <a href="#" class="text-dark">12.1M</a>
                      </h5>

                      <h4 class="mt-3 mb-0">
                        Abod
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-sm-6">
                  <div>
                    <p class="mb-sm-0 mt-2">
                      Page
                      <span class="font-weight-bold">2</span> Of
                      <span class="font-weight-bold">113</span>
                    </p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="float-sm-end">
                    <ul class="pagination pagination-rounded mb-sm-0">
                      <li class="page-item disabled">
                        <a href="#" class="page-link">
                          <i class="mdi mdi-chevron-left"></i>
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">1</a>
                      </li>
                      <li class="page-item active">
                        <a href="#" class="page-link">2</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">3</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">4</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">5</a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          <i class="mdi mdi-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>