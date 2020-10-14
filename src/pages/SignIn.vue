<template>
  <div class="fullscreen row bg-white text-center q-pa-md flex flex-center">
    <component
      :is="$getComponent('form-custom')"
      reference="signin"
      title="Sign In"
      @onSubmit="handleSubmit"
    >
      <component
        :is="$getComponent('input-outline')"
        name="email"
        type="email"
        :value="$v.email.$model"
        label="Email"
        :errors="[
          { visible: $v.email.$dirty ? !$v.email.required : false, message: 'Field is required'},
          { visible: $v.email.$dirty ? !$v.email.email : false, message: 'Must be a valid email'}
        ]"
        @onChange="handleChange"
      />

      <component
        :is="$getComponent('input-outline')"
        name="password"
        type="password"
        :value.sync="$v.password.$model"
        label="Password"
        :errors="[
          { visible: $v.password.$dirty ? !$v.password.required : false, message: 'Field is required'},
          { visible: $v.password.$dirty ? !$v.password.minLength : false, message: 'Field must be at least 6 chars long'}
        ]"
        @onChange="handleChange"
      />

      <div class="actions">
        <q-btn type="submit" class="bg-primary text-white">Sign in</q-btn>
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
      this[input.name] = input.value
    },
    handleSubmit (form) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('submit error', this.$v)
      } else {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log('submit success', user)
      }
    }
  }
}
</script>
