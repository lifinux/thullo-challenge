<script setup lang="ts">
import {
  Search,
  Edit,
  Check,
  Message,
} from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
import Icon from '@/components/Icon.vue';
import { getUsers } from '@/api/user';

const loading = ref(false);

onMounted(() => {

})
const abc = async () => {
  loading.value = true;
  const lsUser: any[] = await getUsers();
  if (lsUser.length) {
    loading.value = false;
    console.log(lsUser);
  }
}
</script>
<template>
  <el-row :gutter="20" class="page-login" align="middle" justify="center">
    <el-col :span="10">
      <el-form ref="formLogin" class="form-login">
        <img class="logo" src="@/assets/devchallenges.svg" alt="logo" />
        <h3>Login</h3>
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
        <el-button class="w-100 t-button" type="primary" @click="abc" :loading="loading">Login</el-button>
        <div class="login-social">
          <span>or continue with these social profile</span>
          <div class="login-social__box">
            <el-button :icon="Search" circle size="large"></el-button>
            <el-button :icon="Edit" circle size="large"></el-button>
            <el-button :icon="Check" circle size="large"></el-button>
            <el-button :icon="Message" circle size="large"></el-button>
          </div>
          <p>
            Don’t have an account yet?
            <a href="/sigup">Sigup</a>
          </p>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.page-login {
  font-size: 18px;
  min-height: 100vh;
  .form-login {
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
    .login-social {
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