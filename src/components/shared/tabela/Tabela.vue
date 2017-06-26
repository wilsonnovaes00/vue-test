<template>
   
            <div class="table-responsive col-md-12">
                <table class="table table-striped" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th class="actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <slot>
                        </slot>
                        </tbody>
                </table>
        </div>
        <!-- /#list -->
    </div>

</template>

<script>

export default{

}

</script>

<style>

</style>