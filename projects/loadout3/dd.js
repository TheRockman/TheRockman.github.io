
app.directive('draggable', function () {
    return {
        scope: {
            drag: '&'
        },
        link: function (scope, element) {
            var el = element[0];

            el.draggable = true;

            el.addEventListener(
                'dragstart',

                function (e) {
                    console.log('ding');
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', this.id);
                    this.classList.add('drag');
                    scope.$apply('drag()');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragend',
                function (e) {
                    this.classList.remove('drag');
                    return false;
                },
                false
            );
        }
    }
});

app.directive('droppable', function () {
    return {
        scope: {
            drop: '&'
        },
        link: function (scope, element) {
            var el = element[0];

            el.addEventListener(
                'dragover',
                function (e) {
                    e.dataTransfer.dropEffect = 'move';
                    if (e.preventDefault) e.preventDefault();
                    this.classList.add('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragenter',
                function (e) {
                    this.classList.add('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'dragleave',
                function (e) {
                    this.classList.remove('over');
                    return false;
                },
                false
            );

            el.addEventListener(
                'drop',
                function (e) {
                    if (e.stopPropagation) e.stopPropagation();

                    this.classList.remove('over');

                    var item = document.getElementById(e.dataTransfer.getData('Text'));

                    var allowedItemitemType = this.title;
                    if (
                        (this.children.length < parseInt(this.role)) &&
                        (item.title === allowedItemitemType || allowedItemitemType === "all")
                    ) {
                        this.appendChild(item);
                        scope.$apply('drop()');
                    }

                    return false;
                },
                false
            );
        }
    }
});