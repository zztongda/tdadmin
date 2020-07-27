<template>
    <div>
	    <div class="box" v-for="item in rules2">
            {{item.name}}
             
        </div>


       123{{param}}
	   <button @click ="aa">点击</button>


    </div>
</template>

<script>

import t1 from './t1';



export default {
    data: function() {
        return {
            param: {
                username: 'admin',
                password: '123123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            rules2:[ {name:'张三',jd:20},{name:'李四',jd:50},{name:'网二',jd:90},],
			length
        };
    },
    components: {
        t1
    },
	methods: {
	
		aa(){
			alert();
		},
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.$router.push('/');
                } else {
                    this.$message.error('请输入账号和密码');
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
div{color:red}
</style>