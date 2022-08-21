<template>
<div id="togglediv">
    <p id="opt1"> {{opt1}}</p>
    <label class="switch">
        <input  type="checkbox"
                :true-value="opt2"
                :false-value="opt1"
                v-model="toggle"
                />
        <span class="slider round"></span>
    </label>
    <p id="opt2"> {{opt2}}</p>
</div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['opt1','opt2','modelValue']);
  const emit = defineEmits(['update:modelValue']);

  const toggle = computed({
     get() {
      return props.modelValue;
    },
    set(toggle) {
      emit('update:modelValue', toggle);
    }
  });

</script>

<style>
/* The switch - the box around the slider */
:root {
 --op1-color: rgb(128, 207, 0);
 --opt2-color: #cb01fd;
}

#opt1{
  color: var(--op1-color);
}

#opt2{
  color: var(--opt2-color);
}

#togglediv {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--op1-color);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--opt2-color);
}

input:focus + .slider {
  box-shadow: 0 0 1px  var(--opt2-color);
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>