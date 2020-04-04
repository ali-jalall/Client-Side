// Price Range 
<div class="card card-refine card-plain">
  <h4 class="card-title">
    Refine
    <button
      class="btn btn-default btn-icon btn-neutral pull-right"
      rel="tooltip"
      title=""
      data-original-title="Reset Filter"
    >
      <i class="arrows-1_refresh-69 now-ui-icons"></i>
    </button>
  </h4>
  <div class="card-header" role="tab" id="headingOne">
    <h6 class="mb-0">
      <a
        data-toggle="collapse"
        data-parent="#collapseOne"
        href="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Price Range
        <i class="now-ui-icons arrows-1_minimal-down"></i>
      </a>
    </h6>
  </div>

  <div
    id="collapseOne"
    class="collapse show"
    role="tabpanel"
    aria-labelledby="headingOne"
  >
    <div class="card-body">
      <span id="price-left" class="price-left pull-left" data-currency="€">
        €42
      </span>
      <span id="price-right" class="price-right pull-right" data-currency="€">
        €880
      </span>
      <div class="clearfix"></div>
      <div
        id="sliderRefine"
        class="slider slider-refine noUi-target noUi-ltr noUi-horizontal"
      >
        <div class="noUi-base">
          <div class="noUi-connects">
            <div
              class="noUi-connect"
              style="transform: translate(1.37931%, 0px) scale(0.963218, 1);"
            ></div>
          </div>
          <div
            class="noUi-origin"
            style="transform: translate(-98.6207%, 0px); z-index: 5;"
          >
            <div
              class="noUi-handle noUi-handle-lower"
              data-handle="0"
              tabindex="0"
              role="slider"
              aria-orientation="horizontal"
              aria-valuemin="30.0"
              aria-valuemax="880.0"
              aria-valuenow="42.0"
              aria-valuetext="42.00"
            >
              <div class="noUi-touch-area"></div>
            </div>
          </div>
          <div
            class="noUi-origin"
            style="transform: translate(-2.29885%, 0px); z-index: 4;"
          >
            <div
              class="noUi-handle noUi-handle-upper"
              data-handle="1"
              tabindex="0"
              role="slider"
              aria-orientation="horizontal"
              aria-valuemin="42.0"
              aria-valuemax="900.0"
              aria-valuenow="880.0"
              aria-valuetext="880.00"
            >
              <div class="noUi-touch-area"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
