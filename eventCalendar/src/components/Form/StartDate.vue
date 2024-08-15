<template>
  <div class="sm:col-span-2">
    <label
      for="description"
      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >Start Date</label
    >
    <input
      id="startDate"
      type="datetime-local"
      :value="modelValue"
      @input="updateModelValue"
      :placeholder="placeholder"
      :required="required"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
    />
    <!-- <input 
    type="date"> -->
  </div>
</template>

<script setup>
defineProps({
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>
