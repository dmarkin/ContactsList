var contacts = angular.module('contacts', [])
    .controller('ContactListController', function ($scope) {
        $scope.currentGroupId = -1;
        $scope.currentContactId = -1;
        $scope.contacts = [{
            groupname: "Friends",
            groupDescription: "My lovely friends",
            personalContacts: [{
                name: "Denis Petrov",
                mobilePhone: "+80679109090",
                workPhone: "+80563789090",
                email: "denispetrov@ua.fm"
            }, {
                name: "Julia Ivanova",
                mobilePhone: "+80679605050",
                workPhone: "+80563789092",
                email: "ivanova_ju@gmail.com"
            }]
        },
            {
                groupname: "Co-Workers",
                groupDescription: "",
                personalContacts: [{
                    name: "Anton Sokolov",
                    mobilePhone: "+80679106677",
                    workPhone: "+80563781111",
                    email: "sokolov@hub.com"
                }]
            }
        ];

        $scope.addGroup = function (groupId) {
            console.log(groupId);
            $scope.currentGroupId = groupId;
            console.log($scope.contactLength);
        };

        $scope.editGroup = function (groupId) {
            console.log(groupId);
            $scope.currentGroupId = groupId;
            $scope.groupname = $scope.contacts[groupId].groupname;
            $scope.groupDescription = $scope.contacts[groupId].groupDescription;
        };

        $scope.saveGroup = function () {
            console.log($scope.currentGroupId, $scope.contacts.length);
            if (!$scope.contacts.some(function (elem) {
                    return elem.groupname === $scope.groupname;
                })) {
                if ($scope.currentGroupId >= $scope.contactLength && $scope.groupname) {
                    $scope.contacts.push({
                        groupname: $scope.groupname,
                        groupDescription: $scope.groupDescription,
                        personalContacts: []
                    });
                    $scope.contactLength += 1;
                    console.log($scope.contactLength);
                }
            }
            if ($scope.currentGroupId < $scope.contacts.length && $scope.groupname) {
                var groupId = $scope.currentGroupId;
                $scope.contacts[groupId].groupname = $scope.groupname;
                $scope.contacts[groupId].groupDescription = $scope.groupDescription;
            }
            $scope.clearForm();
        };

        $scope.deleteGroup = function (groupId) {
            console.log(groupId);
            $scope.contacts.splice(groupId, 1);
            $scope.contactLength -= 1;
            $scope.clearForm();
            console.log($scope.contactLength);
        };

        $scope.addContact = function (groupId, id) {
            console.log(groupId, id);
            $scope.groupname = $scope.contacts[groupId].groupname;
            $scope.currentContactId = id;
            $scope.currentGroupId = groupId;
        };

        $scope.editContact = function (groupId, id) {
            $scope.currentGroupId = groupId;
            $scope.currentContactId = id;
            $scope.groupname = $scope.contacts[groupId].groupname;
            $scope.name = $scope.contacts[groupId].personalContacts[id].name;
            $scope.mobilePhone = $scope.contacts[groupId].personalContacts[id].mobilePhone;
            $scope.workPhone = $scope.contacts[groupId].personalContacts[id].workPhone;
            $scope.email = $scope.contacts[groupId].personalContacts[id].email;
        };

        $scope.saveContact = function () {
            var id = $scope.currentContactId;
            var gid = $scope.currentGroupId;
            console.log(gid, id);

            if (!$scope.contacts[gid].personalContacts.some(function (elem) {
                    return elem.name === $scope.name;
                })) {console.log($scope.groupLength);
                if (id >= $scope.contacts[gid].personalContacts.length && $scope.name) {
                    console.log(1);
                    $scope.contacts[gid].personalContacts.push({
                        name: $scope.name,
                        mobilePhone: $scope.mobilePhone,
                        workPhone: $scope.workPhone,
                        email: $scope.email
                    });
                    $scope.groupLength += 1;
                    console.log($scope.groupLength);
                }
            }
            if ($scope.currentContactId < $scope.contacts[gid].personalContacts.length && $scope.name) {
                console.log(2);
                $scope.contacts[gid].personalContacts[id].name = $scope.name;
                $scope.contacts[gid].personalContacts[id].mobilePhone = $scope.mobilePhone;
                $scope.contacts[gid].personalContacts[id].workPhone = $scope.workPhone;
                $scope.contacts[gid].personalContacts[id].email = $scope.email;
            }
            $scope.clearForm();
        };

        $scope.deleteContact = function (groupId, id) {
            $scope.contacts[groupId].personalContacts.splice(id, 1);
            $scope.clearForm();
        };

        $scope.clearForm = function () {
            $scope.groupname = '';
            $scope.groupDescription = '';
            $scope.name = '';
            $scope.mobilePhone = '';
            $scope.workPhone = '';
            $scope.email = '';
            $scope.currentGroupId = -1;
            $scope.currentContactId = -1;
        };

    });