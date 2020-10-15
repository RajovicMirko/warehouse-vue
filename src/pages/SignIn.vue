<template>
  <div class="fullscreen row bg-primary text-center q-pa-md flex flex-center">
    <component
      :is="$getComponent('form-custom')"
      reference="signin"
      title="Sign In"
      @onSubmit="handleSubmit"
    >
      <template v-slot:form-logo>
        <q-card-section class="q-pb-none">
          <div class="text-h4 text-primary flex justify-center">
            <q-icon name="fas fa-warehouse q-mr-md"></q-icon>
            <span>{{$t('appTitle')}}</span>
          </div>
        </q-card-section>
      </template>

      <component
        :is="$getComponent('input-outline')"
        id="email"
        type="email"
        :value="$v.email.$model"
        label="Email"
        :rules="[
          () => $v.email.required || 'Field is required',
          () => $v.email.email || 'Must be a valid email',
        ]"
        @onChange="handleChange"
      />

      <component
        :is="$getComponent('input-outline')"
        id="password"
        type="password"
        :value.sync="$v.password.$model"
        label="Password"
        :rules="[
          () => $v.password.required || 'Field is required',
          () => $v.password.minLength || 'Field must be at least 6 chars long',
        ]"
        @onChange="handleChange"
      />

      <div class="actions">
        <q-btn type="submit" class="bg-primary text-white full-width">Sign in</q-btn>
      </div>
    </component>
  </div>
</template>

<script>
import signInValidationMixin from '../vualidate/sign-in'

export default {
  name: 'SignIn',

  mixins: [signInValidationMixin],

  methods: {
    handleChange (input) {
      this[input.id] = input.value
      this.$v[input.id].$touch()
    },

    async handleSubmit (form) {
      this.$v.$touch()
      const validateForm = await form.validate()
      if (validateForm) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log('Sign in success', user)
      } else {
        console.log('Sign in error')
      }
    }
  }
}
</script>
