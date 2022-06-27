<template>
    <div class="container contactForm is-flex is-align-items-center is-justify-content-center">
        <div class="card contact-card">
            <div class="card-header">
                <h4 class="card-header-title is-size-3">Contact Me</h4>
            </div>
            <div class="card-content">
                <form @submit="submitForm">
                    <div class="field">
                        <label for="name" class="label">Name</label>
                        <div class="control has-icons-left">
                            <input
                                type="text"
                                class="input"
                                placeholder="Enter name"
                            />
                            <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="email" class="label">Email Address</label>
                        <div class="control has-icons-left">
                            <input type="text" class="input" placeholder="Enter email">
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="reason" class="label">Reason For Contact</label>
                        <div class="control">
                            <textarea name="reason" id="reason" cols="30" rows="10" class="textarea" placeholder="Let me know how I can be of help..."></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },

    methods: {
        // Sends contact form data to server.
        submitForm() {},
    },
}
</script>

<style>

</style>
