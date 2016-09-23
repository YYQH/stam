
<script>
    bd.confirmDelete = function(event, id) {
        event.preventDefault();
        if(!confirm('确认删除?\nID: ' + id)) {
            return ;
        }
        $.get('{%$api%}?id=' + id,
            function(res){
                if(res&&res.error === 0) {
                    alert(res.msg);
                    location.reload();
                }
                
            },
            'json'
        );
    };
</script>
