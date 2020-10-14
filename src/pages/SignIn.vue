<template>
  <div class="fullscreen bg-white text-center q-pa-md flex flex-center">
    <q-form @submit="handleSubmit" ref="signinform">
      <span class="form-title">Sign in</span>
      <component
        :is="$getComponent('input-outline')"
        name="email"
        type="email"
        :value.sync="user.email"
        label="Email"
      />

      <component
        :is="$getComponent('input-outline')"
        name="password"
        type="password"
        :value.sync="user.password"
        label="Password"
      />

      <q-btn type="submit" class="btn-primary">Sign in</q-btn>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.signinform.validate().then((success) => {
        if (success) {
          console.dir(this.user)
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>
