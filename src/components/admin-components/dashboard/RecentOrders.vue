<template>
  <NeoCard class="xl:col-span-2 overflow-hidden flex flex-col">
    <div class="p-5 border-b-2 border-black bg-gray-50 flex justify-between items-center">
        <h3 class="font-bold text-lg uppercase">Đơn Hàng Gần Đây</h3>
        <button class="text-xs font-bold border-2 border-black bg-white px-3 py-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">Xem tất cả</button>
    </div>
    
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead class="bg-black text-white">
                <tr>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">ID</th>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Khách hàng</th>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Sản phẩm</th>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Ngày</th>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap">Trạng thái</th>
                    <th class="p-4 text-sm font-bold uppercase whitespace-nowrap text-right">Giá trị</th>
                </tr>
            </thead>
            <tbody class="divide-y-2 divide-black">
                <tr v-for="order in orders" :key="order.id" class="hover:bg-neo-green/10 transition-colors font-medium">
                    <td class="p-4 font-bold">#{{ order.id }}</td>
                    <td class="p-4">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full border-2 border-black bg-gray-200 overflow-hidden">
                                <img :src="`/author.avif`" alt="avatar" class="w-full h-full object-cover">
                            </div>
                            {{ order.customer }}
                        </div>
                    </td>
                    <td class="p-4">{{ order.product }}</td>
                    <td class="p-4 text-sm text-gray-600">{{ order.date }}</td>
                    <td class="p-4">
                        <span class="px-2 py-1 border-2 border-black text-xs font-bold rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
                            :class="{
                                'bg-green-200': order.status === 'Completed',
                                'bg-yellow-200': order.status === 'Pending',
                                'bg-red-200 text-white': order.status === 'Cancelled'
                            }">
                            {{ order.status }}
                        </span>
                    </td>
                    <td class="p-4 text-right font-bold">{{ order.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </NeoCard>
</template>

<script setup>
import NeoCard from '../common/NeoCard.vue';

defineProps({
  orders: Array
});
</script>