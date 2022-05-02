<template>
  <div class="xl:grid grid-cols-4 mt-5">
    <div class="col-span-3 bg-white rounded-xl shadow-card-shadow">
      <div class="pt-7 mb-5">
        <h3 class="font-semibold text-lg ml-6">Recent Requests</h3>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-gray-100">
              <th
                scope="col"
                class="text-sm text-tgray-600 font-bold px-6 py-4 text-left"
              >
                Name/Email
              </th>
              <th
                scope="col"
                class="text-sm text-tgray-600 font-bold px-6 pt-4 pb-2 text-left"
              >
                Type
              </th>
              <th
                scope="col"
                class="text-sm text-tgray-600 font-bold px-6 pt-4 pb-2 text-left"
              >
                Status
              </th>
              <th
                scope="col"
                class="text-sm text-tgray-600 font-bold px-6 pt-4 pb-2 text-left"
              >
                Date
              </th>
              <th
                scope="col"
                class="text-sm text-tgray-600 font-bold px-6 pt-4 pb-2 text-left"
              ></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, i) in recentRequests"
              :key="i"
              class="border-b border-gray-100 text-tgray-600"
            >
              <td class="px-6 py-5">
                <div class="flex flex-shrink-0">
                  <div class="mr-4 h-10 w-10">
                    <img
                      src="../../assets/avatar.png"
                      :alt="item.name"
                      class="rounded h-full w-full"
                    />
                  </div>
                  <div>
                    <p class="font-semibold text-tdark-200 text-base p-0 m-0">
                      {{ item.name }}
                    </p>
                    <small class="text-sm font-normal p-0 m-0">
                      {{ item.email }}
                    </small>
                  </div>
                </div>
              </td>
              <td class="px-6 text-sm font-normal">
                {{ item.type }}
              </td>
              <td class="px-6">
                <div
                  class="flex items-center justify-center text-xs font-medium rounded-full h-[22px]"
                  :class="{
                    'bg-yellow-100 text-yellow-500': item.status === 'Pending',
                    'bg-green-100 text-green-500': item.status === 'Active',
                  }"
                >
                  {{ item.status }}
                </div>
              </td>
              <td class="px-6 text-sm">{{ item.date }}</td>
              <td class="px-6">
                <div
                  class="h-[25px] w-[25px] rounded-full flex items-center justify-center flex-shrink-0 bg-tblue-200 bg-opacity-10"
                >
                  <arrow-right-icon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon.vue";

export default {
  components: { ArrowRightIcon },
  setup() {
    const recentRequests = [
      {
        name: "Michael Onu",
        email: "michael@mail.com",
        type: "New Agent",
        status: "Pending",
        date: "23/04/18",
        avatar: "../../assets/avatar.png",
      },
      {
        name: "Chioma James",
        email: "alexa@mail.com",
        type: "Account Deactivation",
        status: "Pending",
        date: "23/12/20",
        avatar: "../../assets/avatar.png",
      },
      {
        name: "Boluwatife Ade",
        email: "laure@mail.com",
        type: "New User",
        status: "Active",
        date: "13/04/19",
        avatar: "../../assets/avatar.png",
      },
      {
        name: "Miriam Eric",
        email: "miriam@mail.com",
        type: "Email Auth",
        status: "Active",
        date: "03/04/21",
        avatar: "../../assets/avatar.png",
      },
    ];

    return { recentRequests };
  },
};
</script>

<style></style>
