<script setup>

</script>

<template>
    <div>
        <!-- modify this form HTML and place wherever you want your form -->
        
        <form action="https://formspree.io/f/xpzelybw" method="POST">
            <label>
                Your email:
                <input type="email" name="email">
            </label>
            <label>
                Your message:
                <textarea name="message"></textarea>
            </label>
            <!-- your other form fields go here -->
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

form {
    display: flex;
    flex-direction: column;
}

</style>