<template>
    <footer>
        <div class="footer">
            <div>
                <h3 class="label"> Information </h3>
                <a href="https://github.com/gavinomics/gavitron.git">GitHub Repository</a>                 
                <p style="color: #999;">Copyright © 2018 Gavin Jensen</p>
            </div>
            <div>
                <h3 class="label">Contact</h3>
                <p>(801) 756-5149</p>
                <p>gavinomics@gmail.com</p>
                
            </div>
            <div>
                <h3 class="label">Follow</h3>
                <p>Instagram</p>
            </div>
        </div>
    </footer>
</template>

<script>
 export default {
     name: 'AppFooter'
 }
</script>

<style scoped>

/*==============================FOOTER==============================*/
 
 footer {
    position: relative;
    width: 100%;
    
    background-color: #eee;
    bottom: 0px;
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    max-width: 1200px;
    margin: auto;
    padding: 48px;

    color: #444;
    font-family: 'OpenSans', sans-serif;
    font-size: 14px;
}

.footer a {
    color: #444;
    text-decoration: none;
}

.footer a:hover {
    color: rgb(207, 64, 36);
}

.label {
    font-family: 'OpenSans', sans-serif;
    font-size: 12px;
    font-weight: bold;
    color: #000;
    text-transform: uppercase;
    letter-spacing: .2em;
    padding: 0px 0px 12px 0px;
}

</style>