 <ul>
    <li>Bacon ipsum dolor amet leberkas sausage short ribs, alcatra short loin ham hock cow pork bacon.</li>
    <li>Jowl tongue short loin prosciutto tri-tip, tail rump doner cupim chuck.</li>
</ul>

<script>
    // Extending Javascript's String object
    String.prototype.truncateText = String.prototype.truncateText || function(trunkNum) {
        if (trunkNum == null) trunkNum = 10;
        var str = this;
        if (str.length > trunkNum) {
            str = str.substring(0, trunkNum);
            str = str.replace(/\s+$/, ''); // Remove if the last character is a space
            str += "&hellip;";
        }
        return str;
    }
    
    // Shorten the long texts in <li> tags
    var lists = document.getElementsByTagName("li");
    
    for (var i = 0; i < lists.length; i++) {
        lists[i].innerHTML=lists[i].innerHTML.truncateText(7);
    }
 </script>
