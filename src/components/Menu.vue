<template>
     <div class="menu">
      <ul>
        <!-- <li><a href="#">Trang chủ</a></li>
        <li><a href="#">Album Hình</a></li>
        <li><a href="#">Thành viên</a></li>-->
        
        <router-link to="/homepage" tag="li"><a>Trang chủ</a></router-link>
      </ul>
    </div>
</template>

<script>


export default {
    name:"Menu"
}
</script>

<style>
.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu ul {
  position: relative;
  list-style: none;
}

.menu ul li a {
  text-decoration: none;
  font-size: 24px;
  color: #111;
}

.menu ul li a:hover {
  color: var(--overlay-color);
}
</style>