<script setup lang="ts">
import { Search, Edit, Check, Message } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import Icon from "@/components/Icon.vue";
import { getUsers } from "@/api/user";

const loading = ref(false);

onMounted(() => { });
const abc = async () => {
  loading.value = true;
  const lsUser: any[] = await getUsers();
  if (lsUser.length) {
    loading.value = false;
    console.log(lsUser);
  }
};
</script>
<template>
  <el-row :gutter="20" class="page-sigup" align="middle" justify="center">
    <el-col :span="10">
      <el-form ref="formSigup" class="form-sigup">
        <img class="logo" src="@/assets/devchallenges.svg" alt="logo" />
        <h3>Join thousands of learners from around the world</h3>
        <p>
          Master web development by making real-life projects. There
          are multiple paths for you to choose
        </p>
        <el-form-item prop="pass">
          <el-input class="t-input" size="large" placeholder="Email">
            <template #prefix>
              <icon name="email" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input class="t-input" size="large" placeholder="Password">
            <template #prefix>
              <icon name="lock" />
            </template>
          </el-input>
        </el-form-item>
        <el-button
          class="w-100 t-button"
          type="primary"
          @click="abc"
          :loading="loading"
        >Start coding now</el-button>
        <div class="sigup-social">
          <span>or continue with these social profile</span>
          <div class="sigup-social__box">
            <el-button :icon="Search" circle size="large"></el-button>
            <el-button :icon="Edit" circle size="large"></el-button>
            <el-button :icon="Check" circle size="large"></el-button>
            <el-button :icon="Message" circle size="large"></el-button>
          </div>
          <p>
            Adready a member?
            <a href="/login">Login</a>
          </p>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.page-sigup {
  font-size: 18px;
  min-height: 100vh;
  .form-sigup {
    padding: 48px 58px;
    width: 100%;
    border-radius: 24px;
    border: 1px solid #bdbdbd;
    .logo {
      margin-bottom: 27px;
    }
    > h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 14px;
    }
    > p {
      font-size: 14px;
      margin-bottom: 34px;
    }
    .sigup-social {
      text-align: center;
      margin-top: 32px;
      &__box {
        padding: 22px 0 33px 0;
      }
      > span {
        font-size: 14px;
      }
      > p {
        font-size: 14px;
        > a {
          text-decoration: none;
          color: var(--color-main);
        }
      }
    }
  }
}
</style>
