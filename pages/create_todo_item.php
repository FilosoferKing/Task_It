<div class="col-xs-12 create_item">
    <div class="col-xs-12 col-sm-12 input_container">
        <form action="insert_create.php" method="POST">
            <div class="col-xs-12 title">
                <input id="item_title" class="col-xs-12 item_title" type="text" name="title" placeholder="To Do Title">
            </div>
            <div class="col-xs-12 due_date">
                <input id="item_due_date" class="col-xs-12 item_due_date" type="text" name="due_date"
                       placeholder="Due Date">
            </div>
            <div class="col-xs-12 due_date">
                <input id="item_priority" class="col-xs-12 item_priority" type="text" name="priority"
                       placeholder="Priority: High/Medium/Low">
            </div>
            <div class="col-xs-12 notes">
                <textarea id="item_details" class="col-xs-12 item_details" name="details"
                          placeholder="Details"></textarea>
            </div>
            <button class="col-xs-12 create_button col-sm-4 col-sm-offset-2" type="button" name="login">Create</button>
            <button class="col-xs-12 cancel_button col-sm-4" type="button" name="cancel">Cancel</button>
        </form>
    </div>
</div>