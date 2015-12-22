angular.module('OrderCloud-ContentModal', []);

angular.module('OrderCloud-ContentModal')
    .directive('contentmodal', contentmodal)
    .controller('ContentModalCtrl', ContentModalCtrl)
;

function contentmodal() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'ContentModalCtrl'
    };
    return directive;

    function template() {
        return [
            '<style>',
            //this style is conditional based on nav placement and site css
            'contentmodal a, contentmodal a:hover, contentmodal a:focus {color:#000000; font-size:15px; text-decoration:underline;}',
            '</style>',
            // update the size of the modal window within the open()
            '<a ng-click="open(500)">',
            // replace the *Open Modal* below with your link name
            '<span class="fa fa-info-circle"></span> {{\'READ PRODUCTION SCHEDULE DETAILS\' | r | xlat}}',
            '</a>'
        ].join('');
    }
}

ContentModalCtrl.$inject = ['$scope', '$modal'];
function ContentModalCtrl($scope, $modal) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            backdrop: true,
            backdropClick: true,
            dialogFade: false,
            keyboard: true,
            size: size,
            template: contentmodalopen,
            controller: ContentModalOpenCtrl,
            resolve: {
                item: function () {
                    //pass a scope variable into the modal content. in this case we are providing line item as an example for product use
                    return $scope.LineItem;
                }
            }
        });

        function contentmodalopen() {
            return [
                '<style>',
                '.modal-header {background-color:#f5f5f5;border-bottom: 1px solid #ccc; min-height: 36px; padding: 2px;}',
                '.modal-header h3 { margin-top:0;}',
                '.modal-header h5 { font-size:1.16em; font-weight:bold; padding:5px 10px; text-shadow: 0 1px 0 #ffffff;}',
                '.modal-header a.close {margin:0;padding:0;position:absolute;top:8px;right:10px;font-size:1.5em;color:#000;}',
                '.modal-body {width:100%; margin:0 auto; padding:10px 25px;}',
                '</style>',
                '<div class="modal-header" class="col-xs-12 row pull-right">',
                //Optional title in top header
                '<h5 class="modal-title text-primary">Purchase Power Production Schedule</h5>',
                //Optional close (x) in top header
                '<a class="pull-right close" ng-click="close()">',
                '<i class="fa fa-times"></i>',
                '</a>',
                '</div>',
                '<div class="modal-body">',
                '<h3>Heading</h3>',
                //content block 1
                '<h4>Subheading</h4>',
                '<p>',
                '<table class="tablePPTimeline" style="width: 400px;">',
                '<tbody>',
                <tr>
                  <th class="thPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b><i>Orders received within this time frame&nbsp;by Noon CT on&nbsp;final date:</i></b></span></span></th>
                  <th class="thPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b><i>Will ship&nbsp;no later than&nbsp;this date:</i></b></span></span></th>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-size:14px;"><span style="font-family:arial,helvetica,sans-serif;"><b style="font-family: arial, helvetica, sans-serif; font-size: 14px; line-height: 20.8px;">October 26th - November 16th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-size:14px;"><span style="font-family:arial,helvetica,sans-serif;"><b style="font-family: arial, helvetica, sans-serif; font-size: 14px; line-height: 20.8px;">December 11th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>November 16th - December 14th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>January 22nd</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>December 14th - Januaray 11th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>February 5th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>January 11th - February 8th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>March 4th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>February 8th - March 14th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>April 8th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>March 14th - April 11th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>May 6th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><font face="arial, helvetica, sans-serif"><span style="font-size: 14px;"><b>April 11th - May 9th</b></span></font></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>June 3rd</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>May 9th - June 6th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>July 1st</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>June 6th - July 11th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>August 5th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>July 11th - August 8th</b></span></span></td>
                  <td class="tdPPTimeline"><font face="arial, helvetica, sans-serif"><span style="font-size: 14px;"><b>September 2nd</b></span></font></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>August 8th - September 6th</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>September 30th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>September 6th - October 3rd</b></span></span></td>
                  <td class="tdPPTimeline"><span style="font-family: arial,helvetica,sans-serif;"><span style="font-size: 14px;"><b>October 28th</b></span></span></td>
                </tr>
                <tr>
                  <td class="tdPPTimeline">October 3rd - October 24th</td>
                  <td class="tdPPTimeline">November 18th</td>
                </tr>
                <tr>
                  <td class="tdPPTimeline">October 24th - November 14th</td>
                  <td class="tdPPTimeline">December 9th - In time for the Holidays</td>
                </tr>
                '</tbody>',
                '</table>',
                '</p>',
                //content block 2
                '<h4>Subheading</h4>',
                '<p>',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus lacinia nisl, et hendrerit enim consequat posuere. Etiam ut interdum nisl, in ultricies arcu. ' +
                'In mattis ultrices velit, et tristique sem mattis nec. Nullam fermentum quis erat non dapibus. Aenean sodales est at aliquet bibendum. Suspendisse ultricies quam ' +
                'nec blandit tincidunt. Phasellus viverra est sit amet tortor semper facilisis. Vivamus vitae ipsum lacus. Proin pharetra, tellus in efficitur blandit, tellus nisl ' +
                'venenatis turpis, ut commodo sapien felis eget quam.',
                '</p>',
                '</div>',
                //Optional footer
                '<div class="modal-footer">',
                '<div class="pull-left">',
                '<a class="btn btn-default" ng-click="cancel()">Cancel</a>',
                '</div>',
                '<div class="pull-right">',
                '<a target="_blank" class="btn btn-primary " ng-click="close()">Close</a>',
                '</div>',
                '</div>'
            ].join('');
        }

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };

    };

    var ContentModalOpenCtrl = ['$scope', '$modalInstance', '$modal', function($scope, $modalInstance, $modal, item) {

        $scope.item = item; // this is the item passed in from the ContentModalCtrl resolve

        $scope.close = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }];

}
