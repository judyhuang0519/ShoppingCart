<template>
    <b-navbar>
        <b-navbar-brand>
            Menu
        </b-navbar-brand> 
        <b-navbar-nav>
            <b-nav-item-dropdown text="0">
                <b-dropdown-item>
                    0_1
                </b-dropdown-item>
                <b-nav-item-dropdown text="0_2">
                    <b-dropdown-item>0_2_1</b-dropdown-item>
                    <b-nav-item-dropdown text="0_2_2">
                        <b-dropdown-item>0_2_2_1</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-nav-item-dropdown>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>
export default {
    name: "menu-recursive"
}
</script>