export const dmmf = {
  "models": [
    {
      "name": "User",
      "dbName": null,
      "fields": [
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "username",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "password",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "passwordSetByWeb",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "firstName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "image",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "title",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "middleName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "lastName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "fullName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "gender",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Gender",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "birthDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "birthDateString",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "-",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "email",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "mobile",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "phone",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "nic",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "address1",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "address2",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "zipCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "city",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "City",
          "relationName": "CityToUser",
          "relationFromFields": [
            "cityId"
          ],
          "relationToFields": [
            "cityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isActivated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailVerified",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "phoneVerified",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "useTwoFactor",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "otpSecret",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "incorrectPasswordCount",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emergencyContactPerson",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emergencyContactPhone",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userInt",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userString",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userFloat",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userSessions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserSession",
          "relationName": "UserToUserSession",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "guardian",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Guardian",
          "relationName": "GuardianToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userSetting",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserSetting",
          "relationName": "UserToUserSetting",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userCodes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserCode",
          "relationName": "UserToUserCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "createdSubjects",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "RPMSubjectToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sentMessages",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMMessage",
          "relationName": "RPMMessageToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userSubjects",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserSubject",
          "relationName": "UserToUserSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messages",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserMessage",
          "relationName": "UserToUserMessage",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissionCaregivers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmissionCaregiver",
          "relationName": "RMSAdmissionCaregiverToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EventLogs",
          "relationName": "EventLogsToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billableEventReports",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BillableEventReport",
          "relationName": "BillableEventReportToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userDevices",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserDevice",
          "relationName": "UserToUserDevice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientToICD10Code",
          "relationName": "PatientToICD10CodeToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "auditLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AuditLogs",
          "relationName": "AuditLogsToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderUsers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderUser",
          "relationName": "ReminderUserToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Reminder",
          "relationName": "ReminderToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "conductedBy",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "updatedByAnswerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "updatedBy",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientRecruitment",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientRecruitment",
          "relationName": "PatientRecruitmentToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userRoles",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserRole",
          "relationName": "UserToUserRole",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "UsedPassword",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UsedPassword",
          "relationName": "UsedPasswordToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "tableColumnConfigs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TableColumnConfig",
          "relationName": "TableColumnConfigToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "FlagToPatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "FlagToPatients",
          "relationName": "userCreated",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "FlagToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "FlagToPatients",
          "relationName": "userResolve",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceReceival",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceReceival",
          "relationName": "DeviceReceivalToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceOrder",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceOrder",
          "relationName": "DeviceOrderToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "DeviceInventoryHistory",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventoryHistory",
          "relationName": "DeviceInventoryHistoryToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ExternalCommunicationRecord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ExternalCommunicationRecord",
          "relationName": "ExternalCommunicationRecordToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskHistories",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskHistory",
          "relationName": "TaskHistoryToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "UsedPassword",
      "dbName": null,
      "fields": [
        {
          "name": "usedPasswordId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UsedPasswordToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "password",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "setOn",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "UserSession",
      "dbName": null,
      "fields": [
        {
          "name": "sessionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "sessionData",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "device",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModel",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "osName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "osVersion",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "tzOffset",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ttl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserSession",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "UserCode",
      "dbName": null,
      "fields": [
        {
          "name": "userCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "codeType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CodeType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "code",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 8}"
        },
        {
          "name": "expiresAt",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSignature",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 32}"
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserCode",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "Annoucements",
      "dbName": null,
      "fields": [
        {
          "name": "annoucementId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "AnnoucementsToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sentOn",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noOfPatients",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noOfPractices",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noOfEmployees",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "mode",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnnoucementsUnit",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcementTo",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "AnnouncementTo",
          "default": "PATIENTS",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailDescription",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notificationTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notificationsDescription",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PracticePatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PracticePatientAnnoucements",
          "relationName": "AnnoucementsToPracticePatientAnnoucements",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcemnetRegistery",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnnouncementRegistery",
          "relationName": "AnnoucementsToAnnouncementRegistery",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "PracticePatientAnnoucements",
      "dbName": null,
      "fields": [
        {
          "name": "practicePatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "practice",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToPracticePatientAnnoucements",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPracticePatientAnnoucements",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "annoucement",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Annoucements",
          "relationName": "AnnoucementsToPracticePatientAnnoucements",
          "relationFromFields": [
            "annoucementId"
          ],
          "relationToFields": [
            "annoucementId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "annoucementId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "AnnouncementRegistery",
      "dbName": null,
      "fields": [
        {
          "name": "announcementRegisteryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "AnnouncementRegisteryToHealthcareFacility",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "AnnouncementRegisteryToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "AnnouncementRegisteryToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcement",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Annoucements",
          "relationName": "AnnoucementsToAnnouncementRegistery",
          "relationFromFields": [
            "announcementId"
          ],
          "relationToFields": [
            "annoucementId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcementId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "UserDevice",
      "dbName": null,
      "fields": [
        {
          "name": "userDeviceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "deviceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 32}"
        },
        {
          "name": "deviceName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 64}"
        },
        {
          "name": "deviceModel",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 64}"
        },
        {
          "name": "deviceType",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 64}"
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserDevice",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSessionStates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AppSessionState",
          "relationName": "AppSessionStateToUserDevice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "Setting",
      "dbName": null,
      "fields": [
        {
          "name": "settingId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "settingName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "settingJson",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/modules\"}"
    },
    {
      "name": "UserSetting",
      "dbName": null,
      "fields": [
        {
          "name": "userSettingId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notify",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": true,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "theme",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Theme",
          "default": "LIGHT",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "language",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserSetting",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userSettingJson",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Specialty",
      "dbName": null,
      "fields": [
        {
          "name": "specialtyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "specialty",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"options\": [\"CARDIOLOGY\",\"DERMATOLOGY\",\"ENDOCRINOLOGY\",\"GASTROENTEROLOGY\",\"HEMATOLOGY\"]}"
        },
        {
          "name": "employees",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToSpecialty",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "InsuranceCompany",
      "dbName": null,
      "fields": [
        {
          "name": "insuranceCompanyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insurancePlan",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InsurancePlan",
          "relationName": "InsuranceCompanyToInsurancePlan",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/modules\"}"
    },
    {
      "name": "InsurancePlan",
      "dbName": null,
      "fields": [
        {
          "name": "insurancePlanId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "plan",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insuranceCompanyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insuranceCompany",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InsuranceCompany",
          "relationName": "InsuranceCompanyToInsurancePlan",
          "relationFromFields": [
            "insuranceCompanyId"
          ],
          "relationToFields": [
            "insuranceCompanyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "primaryInsurancePlan",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "secondaryPlanPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "secondaryInsurancePlan",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/modules\"}"
    },
    {
      "name": "Guardian",
      "dbName": null,
      "fields": [
        {
          "name": "guardianId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "GuardianToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "GuardianToPatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "GuardianToPatient",
          "relationName": "GuardianToGuardianToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "Patient",
      "dbName": null,
      "fields": [
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "patientType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "PatientType",
          "default": "CHRONIC",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pin",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isPinSet",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insuranceStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InsuranceStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "copayAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "fatherName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "husbandName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 30}"
        },
        {
          "name": "passportNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 30}"
        },
        {
          "name": "bloodGroup",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 30}"
        },
        {
          "name": "caregiverFirstName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "caregiverLastName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "caregiverRelation",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "caregiverMobile",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "preferredLanguage",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "followUpStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "height",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "age",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "hospitalNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "externalHn",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 30}"
        },
        {
          "name": "isDemoPatient",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "termsAgreed",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "flag",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "doctorNotes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 500}"
        },
        {
          "name": "admissionStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "AdmissionStatus",
          "default": "NOT_ADMITTED",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "activationStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "ActivationStatus",
          "default": "REFERRED",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isReferredMailSent",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isMedicaid",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicareId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "memberId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "groupNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "secondaryMemberId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "secondaryGroupNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "PatientToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insurancePlanId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "insurancePlan",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InsurancePlan",
          "relationName": "primaryInsurancePlan",
          "relationFromFields": [
            "insurancePlanId"
          ],
          "relationToFields": [
            "insurancePlanId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "secondaryInsurancePlanId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "secondaryInsurancePlan",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InsurancePlan",
          "relationName": "secondaryInsurancePlan",
          "relationFromFields": [
            "secondaryInsurancePlanId"
          ],
          "relationToFields": [
            "insurancePlanId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToPatient",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "librePatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "librePracticeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyMember",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "homeHealthAgencyMember",
          "relationFromFields": [
            "homeHealthAgencyMemberId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyMemberId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "createdByEmployee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "createdByEmployee",
          "relationFromFields": [
            "createdByEmployeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "createdByEmployeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "averageReadingTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "referralDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "PatientToRMSAdmission",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":false}"
        },
        {
          "name": "rmsOrder",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "PatientToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientResultableRanges",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientResultableRange",
          "relationName": "PatientToPatientResultableRange",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subjects",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "PatientToRPMSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "allergyToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AllergyToPatient",
          "relationName": "AllergyToPatientToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EventLogs",
          "relationName": "EventLogsToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "auditLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AuditLogs",
          "relationName": "AuditLogsToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSessionStates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AppSessionState",
          "relationName": "AppSessionStateToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientDeviceStates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientDeviceState",
          "relationName": "PatientToPatientDeviceState",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientDeviceStateLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientDeviceStateLog",
          "relationName": "PatientToPatientDeviceStateLog",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceHistories",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventoryHistory",
          "relationName": "DeviceInventoryHistoryToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientDiagnosis",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientToICD10Code",
          "relationName": "PatientToPatientToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "PatientToQUAnswerSheet",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Reminders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Reminder",
          "relationName": "PatientToReminder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "DeviceInventory",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Documents",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "GuardianToPatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "GuardianToPatient",
          "relationName": "GuardianToPatientToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Invoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "InvoiceToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientProgressReport",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReport",
          "relationName": "PatientToPatientProgressReport",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "call",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Call",
          "relationName": "CallToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EmployeeActivityTime",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeActivityTime",
          "relationName": "EmployeeActivityTimeToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PracticePatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PracticePatientAnnoucements",
          "relationName": "PatientToPracticePatientAnnoucements",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "CommunicationLog",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationLog",
          "relationName": "CommunicationLogToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "FlagToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "FlagToPatients",
          "relationName": "FlagToPatientsToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "CommentToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommentToPatients",
          "relationName": "CommentToPatientsToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ExternalCommunicationRecord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ExternalCommunicationRecord",
          "relationName": "ExternalCommunicationRecordToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcementRegistery",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnnouncementRegistery",
          "relationName": "AnnouncementRegisteryToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "activationStatuses",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ActivationStatusHistory",
          "relationName": "ActivationStatusHistoryToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "tasks",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Task",
          "relationName": "PatientToTask",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationPreference",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationPreference",
          "relationName": "CommunicationPreferenceToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmCarePlans",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmCarePlan",
          "relationName": "CcmCarePlanToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "CommunicationPreference",
      "dbName": null,
      "fields": [
        {
          "name": "communicationPreferenceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noCallList",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noSMSList",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noEmailList",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noIncentiveList",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "CommunicationPreferenceToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ActivationStatusHistory",
      "dbName": null,
      "fields": [
        {
          "name": "activationStatusHistoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "ActivationStatusHistoryToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "newStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ActivationStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "FlagToPatients",
      "dbName": null,
      "fields": [
        {
          "name": "flagToPatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "FlagToPatientsToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userCreated",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "userCreated",
          "relationFromFields": [
            "userCreatedId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userCreatedId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userResolve",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "userResolve",
          "relationFromFields": [
            "userResolveId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userResolveId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comment",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resolutionDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "issueStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "IssueStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "issueDetail",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "issueType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "FlagStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "preferTime",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PreferTime",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "audioUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "CommentToPatients",
      "dbName": null,
      "fields": [
        {
          "name": "commentToPatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comment",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "CommentToPatientsToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "CommentToPatientsToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeActivityTime",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeActivityTime",
          "relationName": "CommentToPatientsToEmployeeActivityTime",
          "relationFromFields": [
            "employeeActivityTimeId"
          ],
          "relationToFields": [
            "employeeServiceTimeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeActivityTimeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Designation",
      "dbName": null,
      "fields": [
        {
          "name": "designationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EmployeeToDesignation",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeToDesignation",
          "relationName": "DesignationToEmployeeToDesignation",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "EmployeeToDesignation",
      "dbName": null,
      "fields": [
        {
          "name": "EmployeeToDesignationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToEmployeeToDesignation",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "designation",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Designation",
          "relationName": "DesignationToEmployeeToDesignation",
          "relationFromFields": [
            "designationId"
          ],
          "relationToFields": [
            "designationId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "designationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "GuardianToPatient",
      "dbName": null,
      "fields": [
        {
          "name": "guardianToPatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "guardianId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "guardian",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Guardian",
          "relationName": "GuardianToGuardianToPatient",
          "relationFromFields": [
            "guardianId"
          ],
          "relationToFields": [
            "guardianId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "GuardianToPatientToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "guardianId",
          "patientId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "guardianId",
            "patientId"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "Document",
      "dbName": null,
      "fields": [
        {
          "name": "documentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "DocumentToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstance",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstance",
          "relationName": "DocumentToReminderInstance",
          "relationFromFields": [
            "reminderInstanceId"
          ],
          "relationToFields": [
            "reminderInstanceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "DocumentToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documentType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DocumentType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "info",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "infoJson",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Json",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoice",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "DocumentToInvoice",
          "relationFromFields": [
            "invoiceId"
          ],
          "relationToFields": [
            "invoiceId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "DocumentToQUAnswerSheet",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documentToOrderable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DocumentToOrderable",
          "relationName": "DocumentToDocumentToOrderable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ExternalCommunicationRecord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ExternalCommunicationRecord",
          "relationName": "DocumentToExternalCommunicationRecord",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "task",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Task",
          "relationName": "DocumentToTask",
          "relationFromFields": [
            "taskId"
          ],
          "relationToFields": [
            "taskId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "DocumentToOrderable",
      "dbName": null,
      "fields": [
        {
          "name": "documentToOrderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "DocumentToOrderableToOrderable",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "document",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToDocumentToOrderable",
          "relationFromFields": [
            "documentId"
          ],
          "relationToFields": [
            "documentId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Role",
      "dbName": null,
      "fields": [
        {
          "name": "roleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": {
            "name": "uuid(4)",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userRoles",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserRole",
          "relationName": "RoleToUserRole",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resourcePermissions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResourcePermission",
          "relationName": "ResourcePermissionToRole",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "UserRole",
      "dbName": null,
      "fields": [
        {
          "name": "userRoleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "User",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserRole",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "role",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Role",
          "relationName": "RoleToUserRole",
          "relationFromFields": [
            "roleId"
          ],
          "relationToFields": [
            "roleId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "roleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ResourcePermission",
      "dbName": null,
      "fields": [
        {
          "name": "resourcePermissionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resourceName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "create",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "view",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "role",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Role",
          "relationName": "ResourcePermissionToRole",
          "relationFromFields": [
            "roleId"
          ],
          "relationToFields": [
            "roleId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "roleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Employee",
      "dbName": null,
      "fields": [
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "employeeNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 20}"
        },
        {
          "name": "nationalProviderNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "providerTransactionAccessNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "showAnonymousData",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "EmployeeType",
          "default": "PRACTICE_EMPLOYEE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "specialtyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "specialty",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Specialty",
          "relationName": "EmployeeToSpecialty",
          "relationFromFields": [
            "specialtyId"
          ],
          "relationToFields": [
            "specialtyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgency",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgency",
          "relationName": "EmployeeToHomeHealthAgency",
          "relationFromFields": [
            "homeHealthAgencyId"
          ],
          "relationToFields": [
            "homeHealthAgencyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "EmployeeToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true, \"required\": false}"
        },
        {
          "name": "signature",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "Null",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "EmployeeToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "EmployeeToRMSAdmission",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Subject",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "EmployeeToRPMSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "favouriteCodes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeToICD10Code",
          "relationName": "EmployeeToEmployeeToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityToEmployee",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityToEmployee",
          "relationName": "EmployeeToHealthcareFacilityToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "HealthcareFacilityPOC",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "poc",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "HealthcareFacilityCHIPOCs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "chiPOC",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "HealthcareFacilityPrimaryCoordinator",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "primaryCoordinator",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "uSEscalationsHandledBy",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "handledBy",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "uSEscalationsOpenedBy",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "openedBy",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ReminderInstance",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstance",
          "relationName": "EmployeeToReminderInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Call",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Call",
          "relationName": "CallToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EmployeeActivityTime",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeActivityTime",
          "relationName": "EmployeeToEmployeeActivityTime",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Annoucements",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Annoucements",
          "relationName": "AnnoucementsToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EmployeeToDesignation",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeToDesignation",
          "relationName": "EmployeeToEmployeeToDesignation",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "CommentToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommentToPatients",
          "relationName": "CommentToPatientsToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Document",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventoryHistory",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventoryHistory",
          "relationName": "DeviceInventoryHistoryToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcementRegistery",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnnouncementRegistery",
          "relationName": "AnnouncementRegisteryToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ExternalCommunicationRecord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ExternalCommunicationRecord",
          "relationName": "EmployeeToExternalCommunicationRecord",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Patient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "homeHealthAgencyMember",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientCreatedByEmployee",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "createdByEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "TaskHistory",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskHistory",
          "relationName": "EmployeeToTaskHistory",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeIncentives",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeIncentive",
          "relationName": "EmployeeToEmployeeIncentive",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "DeviceImportXls",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceImportXls",
          "relationName": "DeviceImportXlsToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmCarePlans",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmCarePlan",
          "relationName": "CcmCarePlanToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSFax",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSFax",
          "relationName": "EmployeeToRMSFax",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "HealthcareFacilityToEmployee",
      "dbName": null,
      "fields": [
        {
          "name": "healthcareFacilityToEmployeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToHealthcareFacilityToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToHealthcareFacilityToEmployee",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "HealthcareFacility",
      "dbName": null,
      "fields": [
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "tzOffset",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": -18000,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "phone",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taxpayerIdentificationNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "email",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "fax",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "financialEmail",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "financialFax",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "enableFax",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "enableEmail",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "address",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "city",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "postalCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "state",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ptan",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "settings",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "percentTax",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "discount",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isPercentDiscount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pocId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "poc",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "poc",
          "relationFromFields": [
            "pocId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chiPOCId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chiPOC",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "chiPOC",
          "relationFromFields": [
            "chiPOCId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "primaryCoordinatorId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "primaryCoordinator",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "primaryCoordinator",
          "relationFromFields": [
            "primaryCoordinatorId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isSaas",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "setupFee",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "flatRate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityToEmployee",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityToEmployee",
          "relationName": "HealthcareFacilityToHealthcareFacilityToEmployee",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "HealthcareFacilityToRMSAdmission",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientRecruitment",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientRecruitment",
          "relationName": "HealthcareFacilityToPatientRecruitment",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Invoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "HealthcareFacilityToInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Patient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "HealthcareFacilityToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "HealthcareFacilityInvoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityInvoice",
          "relationName": "HealthcareFacilityToHealthcareFacilityInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Call",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Call",
          "relationName": "CallToHealthcareFacility",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PracticePatient",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PracticePatientAnnoucements",
          "relationName": "HealthcareFacilityToPracticePatientAnnoucements",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityToCPTCode",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityToCPTCode",
          "relationName": "HealthcareFacilityToHealthcareFacilityToCPTCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "externalCommunicationRecord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ExternalCommunicationRecord",
          "relationName": "ExternalCommunicationRecordToHealthcareFacility",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityToFaxesEmails",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityToFaxesEmails",
          "relationName": "HealthcareFacilityToHealthcareFacilityToFaxesEmails",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "announcementRegistery",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnnouncementRegistery",
          "relationName": "AnnouncementRegisteryToHealthcareFacility",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencys",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgency",
          "relationName": "HealthcareFacilityToHomeHealthAgency",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfos",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileInfo",
          "relationName": "HealthcareFacilityToReconcileInfo",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rMSFax",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSFax",
          "relationName": "HealthcareFacilityToRMSFax",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "HealthcareFacilityToFaxesEmails",
      "dbName": null,
      "fields": [
        {
          "name": "healthcareFacilityToFaxesEmailsId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToHealthcareFacilityToFaxesEmails",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "email",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "fax",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailFaxType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmailFaxTypes",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Orderable",
      "dbName": null,
      "fields": [
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "abbr",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 10}"
        },
        {
          "name": "icon",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 200}"
        },
        {
          "name": "times",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "instructions",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "OrderableToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableToOrderableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableToResultable",
          "relationName": "OrderableToOrderableToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subjects",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "OrderableToRPMSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsScheduleInstances",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSScheduleInstance",
          "relationName": "OrderableToRMSScheduleInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EventLogs",
          "relationName": "EventLogsToOrderable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "qUQuestionnaires",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaire",
          "relationName": "OrderableToQUQuestionnaire",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EscalationGraphOrderable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EscalationGraphOrderable",
          "relationName": "EscalationGraphOrderableToOrderable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "TrainingMaterial",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TrainingMaterial",
          "relationName": "OrderableToTrainingMaterial",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "DocumentToOrderable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DocumentToOrderable",
          "relationName": "DocumentToOrderableToOrderable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "Resultable",
      "dbName": null,
      "fields": [
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "key",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "abbr",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dataType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResultableDataType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultUnit",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icon",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "warnLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "normalLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "normalHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "warnHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "minErrorValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "maxErrorValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "abnormalLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "abnormalHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "order",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 300,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientResultableRanges",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientResultableRange",
          "relationName": "PatientResultableRangeToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResultableValue",
          "relationName": "ResultableToResultableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableToResultable",
          "relationName": "OrderableToResultableToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModelToResultable",
          "relationName": "DeviceModelToResultableToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSOrderToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrderToResultable",
          "relationName": "RMSOrderToResultableToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "OrderableToResultable",
      "dbName": null,
      "fields": [
        {
          "name": "orderableToResultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToOrderableToResultable",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Resultable",
          "relationName": "OrderableToResultableToResultable",
          "relationFromFields": [
            "resultableId"
          ],
          "relationToFields": [
            "resultableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "OrderableValue",
      "dbName": null,
      "fields": [
        {
          "name": "orderableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToOrderableValue",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmission",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "OrderableValueToRMSAdmission",
          "relationFromFields": [
            "rmsAdmissionId"
          ],
          "relationToFields": [
            "rmsAdmissionId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsScheduleInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsScheduleInstance",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSScheduleInstance",
          "relationName": "OrderableValueToRMSScheduleInstance",
          "relationFromFields": [
            "rmsScheduleInstanceId"
          ],
          "relationToFields": [
            "rmsScheduleInstanceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "OrderableValueToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventory",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToOrderableValue",
          "relationFromFields": [
            "deviceInventoryId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrder",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "OrderableValueToRMSOrder",
          "relationFromFields": [
            "rmsOrderId"
          ],
          "relationToFields": [
            "rmsOrderId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "observationTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "acquisitionTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "captureTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "readingTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "OrderableStatus",
          "default": "UNHANDLED",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "colorStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "OrderableColorStatus",
          "default": "NORMAL",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isValid",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": true,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isManual",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isLibre",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isLive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cmFile",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "liveOrderableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "liveOrderableValue",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "LiveOrderableValue",
          "relationFromFields": [
            "liveOrderableValueId"
          ],
          "relationToFields": [
            "orderableValueId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "liveOrderableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "LiveOrderableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResultableValue",
          "relationName": "OrderableValueToResultableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\": true}"
        },
        {
          "name": "subjects",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "OrderableValueToRPMSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "USEscalation",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "OrderableValueToUSEscalation",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "ResultableValue",
      "dbName": null,
      "fields": [
        {
          "name": "resultableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValue",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToResultableValue",
          "relationFromFields": [
            "orderableValueId"
          ],
          "relationToFields": [
            "orderableValueId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Resultable",
          "relationName": "ResultableToResultableValue",
          "relationFromFields": [
            "resultableId"
          ],
          "relationToFields": [
            "resultableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medication",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "MedicationToResultableValue",
          "relationFromFields": [
            "medicationId"
          ],
          "relationToFields": [
            "medicationId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "numericValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "textValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dataValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "fileUrls",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResultableStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "PatientResultableRange",
      "dbName": null,
      "fields": [
        {
          "name": "patientResultableRangeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPatientResultableRange",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Resultable",
          "relationName": "PatientResultableRangeToResultable",
          "relationFromFields": [
            "resultableId"
          ],
          "relationToFields": [
            "resultableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "warnLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "normalLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "normalHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "warnHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "minValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "maxValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "abnormalLow",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "abnormalHigh",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/vitals\"}"
    },
    {
      "name": "RMSAdmission",
      "dbName": null,
      "fields": [
        {
          "name": "rmsAdmissionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "admissionDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dischargeDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "primaryDoctorId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "primaryDoctor",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToRMSAdmission",
          "relationFromFields": [
            "primaryDoctorId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToRMSAdmission",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isPinned",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissionCaregivers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmissionCaregiver",
          "relationName": "RMSAdmissionToRMSAdmissionCaregiver",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "rmsOrders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "RMSAdmissionToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToRMSAdmission",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "OrderableValue",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToRMSAdmission",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RMSAdmissionCaregiver",
      "dbName": null,
      "fields": [
        {
          "name": "rmsAdmissionCaregiverId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "rmsAdmission",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "RMSAdmissionToRMSAdmissionCaregiver",
          "relationFromFields": [
            "rmsAdmissionId"
          ],
          "relationToFields": [
            "rmsAdmissionId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "caregiverId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "caregiver",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "RMSAdmissionCaregiverToUser",
          "relationFromFields": [
            "caregiverId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isPrimary",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateStarted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateStopped",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RMSOrder",
      "dbName": null,
      "fields": [
        {
          "name": "rmsOrderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "orderType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isContinuous",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmissionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsAdmission",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSAdmission",
          "relationName": "RMSAdmissionToRMSOrder",
          "relationFromFields": [
            "rmsAdmissionId"
          ],
          "relationToFields": [
            "rmsAdmissionId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToRMSOrder",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToRMSOrder",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medication",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "MedicationToRMSOrder",
          "relationFromFields": [
            "medicationId"
          ],
          "relationToFields": [
            "medicationId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icd10Code",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "ICD10CodeToRMSOrder",
          "relationFromFields": [
            "iCD10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToRMSOrder",
          "relationFromFields": [
            "orderById"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pillboxSlot",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventory",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToRMSOrder",
          "relationFromFields": [
            "deviceInventoryId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "alertGap",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 600,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "graceTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 1800,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsSchedules",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSSchedule",
          "relationName": "RMSOrderToRMSSchedule",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSOrderToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrderToResultable",
          "relationName": "RMSOrderToRMSOrderToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "OrderableValue",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RMSOrderToResultable",
      "dbName": null,
      "fields": [
        {
          "name": "rmsOrderToResultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "rmsOrder",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "RMSOrderToRMSOrderToResultable",
          "relationFromFields": [
            "rmsOrderId"
          ],
          "relationToFields": [
            "rmsOrderId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Resultable",
          "relationName": "RMSOrderToResultableToResultable",
          "relationFromFields": [
            "resultableId"
          ],
          "relationToFields": [
            "resultableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RMSSchedule",
      "dbName": null,
      "fields": [
        {
          "name": "rmsScheduleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "rmsOrderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrder",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "RMSOrderToRMSSchedule",
          "relationFromFields": [
            "rmsOrderId"
          ],
          "relationToFields": [
            "rmsOrderId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationQuantity",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "repeatValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "repeatUnit",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RepeatTimeUnit",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "smsAlert",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": true,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsScheduleInstances",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSScheduleInstance",
          "relationName": "RMSScheduleToRMSScheduleInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RMSScheduleInstance",
      "dbName": null,
      "fields": [
        {
          "name": "rmsScheduleInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsScheduleId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsSchedule",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSSchedule",
          "relationName": "RMSScheduleToRMSScheduleInstance",
          "relationFromFields": [
            "rmsScheduleId"
          ],
          "relationToFields": [
            "rmsScheduleId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "processed",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taken",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValue",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToRMSScheduleInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToRMSScheduleInstance",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medication",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "MedicationToRMSScheduleInstance",
          "relationFromFields": [
            "medicationId"
          ],
          "relationToFields": [
            "medicationId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"admission\"}"
    },
    {
      "name": "RPMSubject",
      "dbName": null,
      "fields": [
        {
          "name": "rpmSubjectId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "title",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValue",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToRPMSubject",
          "relationFromFields": [
            "orderableValueId"
          ],
          "relationToFields": [
            "orderableValueId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToRPMSubject",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToRPMSubject",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ownerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "owner",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "RPMSubjectToUser",
          "relationFromFields": [
            "ownerId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "escalatedTo",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToRPMSubject",
          "relationFromFields": [
            "escalatedToId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "escalatedToId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageWorkflow",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "MessageWorkflow",
          "default": "GENERAL",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messages",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMMessage",
          "relationName": "RPMMessageToRPMSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subjectUsers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserSubject",
          "relationName": "RPMSubjectToUserSubject",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "SubjectStatus",
          "default": "CLOSED",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "handoverSheetStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HandOverSheetStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalCallTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"messages\"}"
    },
    {
      "name": "RPMMessage",
      "dbName": null,
      "fields": [
        {
          "name": "rpmMessageId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rpmSubjectId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rpmSubject",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "RPMMessageToRPMSubject",
          "relationFromFields": [
            "rpmSubjectId"
          ],
          "relationToFields": [
            "rpmSubjectId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MessageContentType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageText",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageDuration",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "copyToPatient",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sendSMS",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medium",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Medium",
          "default": "CHARMS",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageCategory",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "MessageCategory",
          "default": "NORMAL",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "senderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sender",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "RPMMessageToUser",
          "relationFromFields": [
            "senderId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "smsStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "SmsStatus",
          "default": "queued",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "smsSid",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userMessages",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserMessage",
          "relationName": "RPMMessageToUserMessage",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isRead",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"messages\"}"
    },
    {
      "name": "UserSubject",
      "dbName": null,
      "fields": [
        {
          "name": "userSubjectId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserSubject",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subject",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMSubject",
          "relationName": "RPMSubjectToUserSubject",
          "relationFromFields": [
            "subjectId"
          ],
          "relationToFields": [
            "rpmSubjectId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subjectId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"messages\"}"
    },
    {
      "name": "UserMessage",
      "dbName": null,
      "fields": [
        {
          "name": "messageStatusId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "message",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RPMMessage",
          "relationName": "RPMMessageToUserMessage",
          "relationFromFields": [
            "messageId"
          ],
          "relationToFields": [
            "rpmMessageId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "UserToUserMessage",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isRead",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageDeliveryStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "MessageDeliveryStatus",
          "default": "SENT",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"messages\"}"
    },
    {
      "name": "BulkMessage",
      "dbName": null,
      "fields": [
        {
          "name": "serialNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "createdBy",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "conditions",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageBody",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "numberOfParactices",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "numberOfpatient",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "auxiliaryDuration",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "paractices",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Json",
          "default": "[]",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patients",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Json",
          "default": "[]",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Manufacturer",
      "dbName": null,
      "fields": [
        {
          "name": "manufacturerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "manufacturer",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModels",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceModelToManufacturer",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Medication",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "ManufacturerToMedication",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "DeviceType",
      "dbName": null,
      "fields": [
        {
          "name": "deviceTypeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "deviceType",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModels",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceModelToDeviceType",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "DeviceModel",
      "dbName": null,
      "fields": [
        {
          "name": "deviceModelId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "deviceModel",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "commProtocol",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceCommProtocol",
          "default": "BLUETOOTH",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "modelCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceAbbr",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceIcon",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "supportMultiple",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "supportContinuous",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "instructions",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "instructionVideo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "manufacturerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "manufacturer",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Manufacturer",
          "relationName": "DeviceModelToManufacturer",
          "relationFromFields": [
            "manufacturerId"
          ],
          "relationToFields": [
            "manufacturerId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceTypeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceType",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceType",
          "relationName": "DeviceModelToDeviceType",
          "relationFromFields": [
            "deviceTypeId"
          ],
          "relationToFields": [
            "deviceTypeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderThreshold",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 30,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "defaultOrderQuantity",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 50,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "devices",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToDeviceModel",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelToResultable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModelToResultable",
          "relationName": "DeviceModelToDeviceModelToResultable",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceReceival",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceReceival",
          "relationName": "DeviceModelToDeviceReceival",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceOrder",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceOrder",
          "relationName": "DeviceModelToDeviceOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "DeviceModelToResultable",
      "dbName": null,
      "fields": [
        {
          "name": "deviceModelToResultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "resultable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Resultable",
          "relationName": "DeviceModelToResultableToResultable",
          "relationFromFields": [
            "resultableId"
          ],
          "relationToFields": [
            "resultableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModel",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceModelToDeviceModelToResultable",
          "relationFromFields": [
            "deviceModelId"
          ],
          "relationToFields": [
            "deviceModelId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "DeviceInventory",
      "dbName": null,
      "fields": [
        {
          "name": "deviceInventoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceUniqueCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceIOSCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModel",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceInventoryToDeviceModel",
          "relationFromFields": [
            "deviceModelId"
          ],
          "relationToFields": [
            "deviceModelId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rmsOrders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "DeviceInventoryToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceHistory",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventoryHistory",
          "relationName": "DeviceInventoryToDeviceInventoryHistory",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceStatus",
          "default": "AVAILABLE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isFaulty",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isAssigned",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "DeviceInventoryToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValues",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "DeviceInventoryToOrderableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientDeviceState",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientDeviceState",
          "relationName": "DeviceInventoryToPatientDeviceState",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientDeviceStateLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientDeviceStateLog",
          "relationName": "DeviceInventoryToPatientDeviceStateLog",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceImportTemp",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceImportTemp",
          "relationName": "DeviceImportTempToDeviceInventory",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "DeviceReceival",
      "dbName": null,
      "fields": [
        {
          "name": "deviceReceivalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "addedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "addedBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "DeviceReceivalToUser",
          "relationFromFields": [
            "addedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModel",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceModelToDeviceReceival",
          "relationFromFields": [
            "deviceModelId"
          ],
          "relationToFields": [
            "deviceModelId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceOrderType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceOrderType",
          "default": "INVENTORY_ADDED",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "quantity",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "DeviceOrder",
      "dbName": null,
      "fields": [
        {
          "name": "deviceOrderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "DeviceOrderToUser",
          "relationFromFields": [
            "orderById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModel",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceModel",
          "relationName": "DeviceModelToDeviceOrder",
          "relationFromFields": [
            "deviceModelId"
          ],
          "relationToFields": [
            "deviceModelId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceModelId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceOrderType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceOrderType",
          "default": "ORDER",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderedQuantity",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Status",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "DeviceInventoryHistory",
      "dbName": null,
      "fields": [
        {
          "name": "deviceInventoryHistoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventory",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToDeviceInventoryHistory",
          "relationFromFields": [
            "deviceInventoryId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceStatus",
          "default": "AVAILABLE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "DeviceInventoryHistoryToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "DeviceInventoryHistoryToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "User",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "DeviceInventoryHistoryToUser",
          "relationFromFields": [
            "userUserId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userUserId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"devices\"}"
    },
    {
      "name": "ExternalCommunicationRecord",
      "dbName": null,
      "fields": [
        {
          "name": "externalCommunicationRecordId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subject",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationMethod",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationMethod",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationSentTo",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationSentTo",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sendBy",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "ExternalCommunicationRecordToUser",
          "relationFromFields": [
            "sentById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sentById",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "ExternalCommunicationRecordToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToExternalCommunicationRecord",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcarefacility",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "ExternalCommunicationRecordToHealthcareFacility",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "document",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToExternalCommunicationRecord",
          "relationFromFields": [
            "documentId"
          ],
          "relationToFields": [
            "documentId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "MedicationRoute",
      "dbName": null,
      "fields": [
        {
          "name": "medicationRouteId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Medication",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "MedicationToMedicationRoute",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/medications\"}"
    },
    {
      "name": "DosageUnit",
      "dbName": null,
      "fields": [
        {
          "name": "dosageUnitId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Medication",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "DosageUnitToMedication",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/medications\"}"
    },
    {
      "name": "DosageForm",
      "dbName": null,
      "fields": [
        {
          "name": "dosageFormId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "image",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isInsulin",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isInsulinCombined",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Medication",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Medication",
          "relationName": "DosageFormToMedication",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/medications\"}"
    },
    {
      "name": "Medication",
      "dbName": null,
      "fields": [
        {
          "name": "medicationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "rxcui",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "genericName",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "image",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "packageImage",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "strength",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "frequency",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "times",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "instructions",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationRouteId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "medicationRoute",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MedicationRoute",
          "relationName": "MedicationToMedicationRoute",
          "relationFromFields": [
            "medicationRouteId"
          ],
          "relationToFields": [
            "medicationRouteId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dosageFormId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dosageForm",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DosageForm",
          "relationName": "DosageFormToMedication",
          "relationFromFields": [
            "dosageFormId"
          ],
          "relationToFields": [
            "dosageFormId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dosageUnitId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dosageUnit",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DosageUnit",
          "relationName": "DosageUnitToMedication",
          "relationFromFields": [
            "dosageUnitId"
          ],
          "relationToFields": [
            "dosageUnitId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "manufacturerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "manufacturer",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Manufacturer",
          "relationName": "ManufacturerToMedication",
          "relationFromFields": [
            "manufacturerId"
          ],
          "relationToFields": [
            "manufacturerId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSOrder",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "MedicationToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSScheduleInstance",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSScheduleInstance",
          "relationName": "MedicationToRMSScheduleInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ResultableValue",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ResultableValue",
          "relationName": "MedicationToResultableValue",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "BigInt",
          "default": "1593800509",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "BigInt",
          "default": "1593800509",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"orderables/medications\"}"
    },
    {
      "name": "Allergy",
      "dbName": null,
      "fields": [
        {
          "name": "allergyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "allergyToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AllergyToPatient",
          "relationName": "AllergyToAllergyToPatient",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users/patient-info\"}"
    },
    {
      "name": "AllergyToPatient",
      "dbName": null,
      "fields": [
        {
          "name": "allergyToPatientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "allergy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Allergy",
          "relationName": "AllergyToAllergyToPatient",
          "relationFromFields": [
            "allergyId"
          ],
          "relationToFields": [
            "allergyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\": false}"
        },
        {
          "name": "allergyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "AllergyToPatientToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "allergyId",
          "patientId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "allergyId",
            "patientId"
          ]
        }
      ],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users/patient-info\"}"
    },
    {
      "name": "EventLogs",
      "dbName": null,
      "fields": [
        {
          "name": "eventLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "EventLogsToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "EventLogsToOrderable",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "EventLogsToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventLogType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EventLogType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "AuditLogs",
      "dbName": null,
      "fields": [
        {
          "name": "auditLogsId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "auditTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "AuditLogsToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "AuditLogsToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "module",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AuditModuleType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "actionType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ActionsType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "message",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "BillableEventReport",
      "dbName": null,
      "fields": [
        {
          "name": "billableEventReportId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "generatedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "BillableEventReportToUser",
          "relationFromFields": [
            "generatedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "generatedOn",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ICD10Code",
      "dbName": null,
      "fields": [
        {
          "name": "icd10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icd10Code",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "description",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parent",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "Children",
          "relationFromFields": [
            "parentId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isLeaf",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "level",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "children",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "Children",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EmployeeToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EmployeeToICD10Code",
          "relationName": "EmployeeToICD10CodeToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientToICD10Code",
          "relationName": "ICD10CodeToPatientToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "RMSOrder",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RMSOrder",
          "relationName": "ICD10CodeToRMSOrder",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "QUQuestionnaireToICD10Code",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaireToICD10Code",
          "relationName": "ICD10CodeToQUQuestionnaireToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "ICD10CodeToQUAnswerSheet",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstanceToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstanceToICD10Code",
          "relationName": "ICD10CodeToReminderInstanceToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "EmployeeToICD10Code",
      "dbName": null,
      "fields": [
        {
          "name": "employeeToICD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "icd10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToEmployeeToICD10Code",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10Code",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "EmployeeToICD10CodeToICD10Code",
          "relationFromFields": [
            "icd10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"ICD10Code\"}"
    },
    {
      "name": "PatientToICD10Code",
      "dbName": null,
      "fields": [
        {
          "name": "patientToICD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"size\": 40}"
        },
        {
          "name": "icd10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "addedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "addedBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "PatientToICD10CodeToUser",
          "relationFromFields": [
            "addedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPatientToICD10Code",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10Code",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "ICD10CodeToPatientToICD10Code",
          "relationFromFields": [
            "icd10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isActive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": true,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"ICD10Code\"}"
    },
    {
      "name": "AppSessionState",
      "dbName": null,
      "fields": [
        {
          "name": "appSessionStateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userDeviceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userDevice",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "UserDevice",
          "relationName": "AppSessionStateToUserDevice",
          "relationFromFields": [
            "userDeviceId"
          ],
          "relationToFields": [
            "userDeviceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "AppSessionStateToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AppSessionStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "battery",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "bluetoothEnabled",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appVersion",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSessionStateLogs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AppSessionStateLog",
          "relationName": "AppSessionStateToAppSessionStateLog",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "AppSessionStateLog",
      "dbName": null,
      "fields": [
        {
          "name": "appSessionStateLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSessionStateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appSessionState",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AppSessionState",
          "relationName": "AppSessionStateToAppSessionStateLog",
          "relationFromFields": [
            "appSessionStateId"
          ],
          "relationToFields": [
            "appSessionStateId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "SessionEventTypes",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventFrom",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "SessionEventFrom",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventData",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "stateFrom",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "SessionEventTypes",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "mobileOs",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MobileOS",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "stateDuration",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "PatientDeviceState",
      "dbName": null,
      "fields": [
        {
          "name": "deviceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "device",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToPatientDeviceState",
          "relationFromFields": [
            "deviceId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPatientDeviceState",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "stateTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MonitoringEventTypes",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventFrom",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MonitoringEventFrom",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isConnected",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "PatientDeviceStateLog",
      "dbName": null,
      "fields": [
        {
          "name": "patientDeviceStateLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "device",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceInventoryToPatientDeviceStateLog",
          "relationFromFields": [
            "deviceId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPatientDeviceStateLog",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "stateTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MonitoringEventTypes",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "eventFrom",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "MonitoringEventFrom",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isConnected",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Reminder",
      "dbName": null,
      "fields": [
        {
          "name": "reminderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "title",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isAdHoc",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToReminder",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ownerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "owner",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "ReminderToUser",
          "relationFromFields": [
            "ownerId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderTypeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderType",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderType",
          "relationName": "ReminderToReminderType",
          "relationFromFields": [
            "reminderTypeId"
          ],
          "relationToFields": [
            "reminderTypeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "repeatValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "repeatUnit",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RepeatTimeUnit",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstances",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstance",
          "relationName": "ReminderToReminderInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderUsers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderUser",
          "relationName": "ReminderToReminderUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"reminder\"}"
    },
    {
      "name": "ReminderUser",
      "dbName": null,
      "fields": [
        {
          "name": "reminderUserId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "ReminderUserToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminder",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Reminder",
          "relationName": "ReminderToReminderUser",
          "relationFromFields": [
            "reminderId"
          ],
          "relationToFields": [
            "reminderId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "userId",
          "reminderId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "userId",
            "reminderId"
          ]
        }
      ],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"reminder\"}"
    },
    {
      "name": "ReminderInstance",
      "dbName": null,
      "fields": [
        {
          "name": "reminderInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminder",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Reminder",
          "relationName": "ReminderToReminderInstance",
          "relationFromFields": [
            "reminderId"
          ],
          "relationToFields": [
            "reminderId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstanceStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "processed",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isConducted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callDuration",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callStartTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callEndTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "calledBy",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToReminderInstance",
          "relationFromFields": [
            "calledByEmployeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "QUAnswerSheetToReminderInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Document",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToReminderInstance",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstanceToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstanceToICD10Code",
          "relationName": "ReminderInstanceToReminderInstanceToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "calledByEmployeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"reminder\"}"
    },
    {
      "name": "EmployeeActivityTime",
      "dbName": null,
      "fields": [
        {
          "name": "employeeServiceTimeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "EmployeeActivityTimeToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToEmployeeActivityTime",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "duration",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "durationType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DurationType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "timeAddedStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "timeDiscarded",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "encodedChartDetails",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "CommentToPatients",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommentToPatients",
          "relationName": "CommentToPatientsToEmployeeActivityTime",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Call",
      "dbName": null,
      "fields": [
        {
          "name": "callId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "prepTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "type",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CallType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CallStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reason",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "CallReason",
          "default": "UNKNOWN",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comment",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "CallToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "caller",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "CallToEmployee",
          "relationFromFields": [
            "callerEmployeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callerEmployeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healtcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "CallToHealthcareFacility",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ReminderType",
      "dbName": null,
      "fields": [
        {
          "name": "reminderTypeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "type",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "color",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Reminders",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Reminder",
          "relationName": "ReminderToReminderType",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "QUQuestionnaire",
      "dbName": null,
      "fields": [
        {
          "name": "questionnaireId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaireType",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "QUQuestionnaireType",
          "default": "MISCELLANEOUS",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subtype",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": -1,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheets",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "QUAnswerSheetToQUQuestionnaire",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToQUQuestionnaire",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "preNote",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "postNote",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "greetingScript",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endingScript",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "qUQuestionnaireToICD10Codes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaireToICD10Code",
          "relationName": "QUQuestionnaireToQUQuestionnaireToICD10Code",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "questions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestion",
          "relationName": "QUQuestionToQUQuestionnaire",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "guidePdfUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"questionnaire\"}"
    },
    {
      "name": "QUQuestion",
      "dbName": null,
      "fields": [
        {
          "name": "questionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "question",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AnswerType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "option",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "refAnswer",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "order",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaire",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaire",
          "relationName": "QUQuestionToQUQuestionnaire",
          "relationFromFields": [
            "qUQuestionnaireId"
          ],
          "relationToFields": [
            "questionnaireId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswer",
          "relationName": "QUAnswerToQUQuestion",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "qUQuestionnaireId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"questionnaire\"}"
    },
    {
      "name": "QUQuestionnaireToICD10Code",
      "dbName": null,
      "fields": [
        {
          "name": "QUQuestionnaireToICD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaireId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaire",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaire",
          "relationName": "QUQuestionnaireToQUQuestionnaireToICD10Code",
          "relationFromFields": [
            "questionnaireId"
          ],
          "relationToFields": [
            "questionnaireId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icd10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10Code",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "ICD10CodeToQUQuestionnaireToICD10Code",
          "relationFromFields": [
            "icd10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"questionnaire\"}"
    },
    {
      "name": "QUAnswerSheet",
      "dbName": null,
      "fields": [
        {
          "name": "answerSheetId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerMarks",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaireId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionnaire",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestionnaire",
          "relationName": "QUAnswerSheetToQUQuestionnaire",
          "relationFromFields": [
            "questionnaireId"
          ],
          "relationToFields": [
            "questionnaireId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToQUAnswerSheet",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "conductedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "conductedBy",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "conductedBy",
          "relationFromFields": [
            "conductedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstance",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstance",
          "relationName": "QUAnswerSheetToReminderInstance",
          "relationFromFields": [
            "reminderInstanceId"
          ],
          "relationToFields": [
            "reminderInstanceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icd10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10Code",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "ICD10CodeToQUAnswerSheet",
          "relationFromFields": [
            "icd10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "document",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToQUAnswerSheet",
          "relationFromFields": [
            "documentId"
          ],
          "relationToFields": [
            "documentId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "secondStepAnswerSheetId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "updatedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "updatedBy",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "updatedBy",
          "relationFromFields": [
            "updatedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "checkListStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCompleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "postNote",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswer",
          "relationName": "QUAnswerToQUAnswerSheet",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "USEscalation1",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "level1",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "USEscalation2",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "level2",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"questionnaire\"}"
    },
    {
      "name": "QUAnswer",
      "dbName": null,
      "fields": [
        {
          "name": "answerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheetId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answerSheet",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "QUAnswerToQUAnswerSheet",
          "relationFromFields": [
            "answerSheetId"
          ],
          "relationToFields": [
            "answerSheetId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "questionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "question",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUQuestion",
          "relationName": "QUAnswerToQUQuestion",
          "relationFromFields": [
            "questionId"
          ],
          "relationToFields": [
            "questionId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answer",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"questionnaire\"}"
    },
    {
      "name": "USEscalation",
      "dbName": null,
      "fields": [
        {
          "name": "usEscalationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "openedBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "openedBy",
          "relationFromFields": [
            "openedById"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "openedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "handledBy",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "handledBy",
          "relationFromFields": [
            "handledById"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "handledById",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValue",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "OrderableValue",
          "relationName": "OrderableValueToUSEscalation",
          "relationFromFields": [
            "orderableValueId"
          ],
          "relationToFields": [
            "orderableValueId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableValueId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "level1answerSheet",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "level1",
          "relationFromFields": [
            "level1answerSheetId"
          ],
          "relationToFields": [
            "answerSheetId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "level1answerSheetId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "level2answerSheet",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "QUAnswerSheet",
          "relationName": "level2",
          "relationFromFields": [
            "level2answerSheetId"
          ],
          "relationToFields": [
            "answerSheetId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "level2answerSheetId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "readingsStartTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "readingsEndTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "EscalationGraphOrderable",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "EscalationGraphOrderable",
          "relationName": "EscalationGraphOrderableToUSEscalation",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "makeCloseNotes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "escalationDuration",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"us-escalations\"}"
    },
    {
      "name": "EscalationGraphOrderable",
      "dbName": null,
      "fields": [
        {
          "name": "escalationGraphOrderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "EscalationGraphOrderableToOrderable",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "usEscalation",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "USEscalation",
          "relationName": "EscalationGraphOrderableToUSEscalation",
          "relationFromFields": [
            "usEscalationId"
          ],
          "relationToFields": [
            "usEscalationId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "usEscalationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"us-escalations\"}"
    },
    {
      "name": "PatientRecruitment",
      "dbName": null,
      "fields": [
        {
          "name": "recruitmentId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "recruitmentDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "recruitedById",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "recruitedBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "PatientRecruitmentToUser",
          "relationFromFields": [
            "recruitedById"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToPatientRecruitment",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "excelFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"users\"}"
    },
    {
      "name": "Notification",
      "dbName": null,
      "fields": [
        {
          "name": "notificationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "groupNotificationId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "event",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "title",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "body",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "timeList",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "message",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "category",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "NotificationCategory",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "type",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "NotificationType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "alarm",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isAutoRefresh",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "duration",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isRead",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "CPTCode",
      "dbName": null,
      "fields": [
        {
          "name": "cptCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "amount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cmsAllowableAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "durationValue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "durationUnit",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "RepeatTimeUnit",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "CPTCodeToInvoiceToCptCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityToCPTCodes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityToCPTCode",
          "relationName": "CPTCodeToHealthcareFacilityToCPTCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientProgressReportToCpt",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReportToCpt",
          "relationName": "CPTCodeToPatientProgressReportToCpt",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "HomeHealthAgencyToCptCode",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgencyToCptCode",
          "relationName": "CPTCodeToHomeHealthAgencyToCptCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/modules\"}"
    },
    {
      "name": "HealthcareFacilityToCPTCode",
      "dbName": "healthcareFacilityToCPTCode",
      "fields": [
        {
          "name": "healthcareFacilityToCPTCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CPTCode",
          "relationName": "CPTCodeToHealthcareFacilityToCPTCode",
          "relationFromFields": [
            "cptCodeId"
          ],
          "relationToFields": [
            "cptCodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToHealthcareFacilityToCPTCode",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "amount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "Invoice",
      "dbName": null,
      "fields": [
        {
          "name": "invoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingRefNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "InvoiceToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToInvoice",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityInvoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityInvoice",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityInvoice",
          "relationName": "HealthcareFacilityInvoiceToInvoice",
          "relationFromFields": [
            "healthcareFacilityInvoiceId"
          ],
          "relationToFields": [
            "healthcareFacilityInvoiceId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyInvoice",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgencyInvoice",
          "relationName": "HomeHealthAgencyInvoiceToInvoice",
          "relationFromFields": [
            "homeHealthAgencyInvoiceId"
          ],
          "relationToFields": [
            "homeHealthAgencyInvoiceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyInvoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoicedAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalDiscount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalPaymentReceived",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "InvoiceToInvoiceToCptCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "document",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/modules\"}"
    },
    {
      "name": "CommunicationLog",
      "dbName": null,
      "fields": [
        {
          "name": "communicationLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationMessage",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "CommunicationLogToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationMethod",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationMethod",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "communicationDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxInvoiceToCptCode",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "faxCommunicationLog",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailInvoiceToCptCode",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "emailCommunicationLog",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "InvoiceToCptCode",
      "dbName": null,
      "fields": [
        {
          "name": "invoiceToCPTCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodeNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CPTCode",
          "relationName": "CPTCodeToInvoiceToCptCode",
          "relationFromFields": [
            "cPTCodeId"
          ],
          "relationToFields": [
            "cptCodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cPTCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoice",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "InvoiceToInvoiceToCptCode",
          "relationFromFields": [
            "invoiceId"
          ],
          "relationToFields": [
            "invoiceId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "paymentToReceive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "discount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "paymentReceived",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalSharePractice",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalFromInsurance",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "balanceDue",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodeUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodeStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "InvoiceToCptCodeStatus",
          "default": "PROFORMA",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateApplied",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "BigInt",
          "default": "0",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ymdApplied",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": -1,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxCommunicationLog",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationLog",
          "relationName": "faxCommunicationLog",
          "relationFromFields": [
            "faxCommunicationLogId"
          ],
          "relationToFields": [
            "communicationLogId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxCommunicationLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailCommunicationLog",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CommunicationLog",
          "relationName": "emailCommunicationLog",
          "relationFromFields": [
            "emailCommunicationLogId"
          ],
          "relationToFields": [
            "communicationLogId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailCommunicationLogId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileToDPCs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileToDPC",
          "relationName": "InvoiceToCptCodeToReconcileToDPC",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfo",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileInfo",
          "relationName": "InvoiceToCptCodeToReconcileInfo",
          "relationFromFields": [
            "reconcileInfoId"
          ],
          "relationToFields": [
            "reconcileInfoId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfoId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "cPTCodeId",
          "invoiceId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "cPTCodeId",
            "invoiceId"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "HealthcareFacilityInvoice",
      "dbName": null,
      "fields": [
        {
          "name": "healthcareFacilityInvoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoicePaymentMode",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "InvoicePaymentMode",
          "default": "PAY_WHEN_PAID",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noOfPatients",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToHealthcareFacilityInvoice",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "saasAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityInvoiceStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "healthcareFacilityInvoiceStatus",
          "default": "DUE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "practiceInvoiceUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingReportUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingEmailStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingFaxStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "clearedOn",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "HealthcareFacilityInvoiceToInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileToDPCs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileToDPC",
          "relationName": "HealthcareFacilityInvoiceToReconcileToDPC",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "HomeHealthAgencyInvoice",
      "dbName": null,
      "fields": [
        {
          "name": "homeHealthAgencyInvoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "noOfPatients",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgency",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgency",
          "relationName": "HomeHealthAgencyToHomeHealthAgencyInvoice",
          "relationFromFields": [
            "homeHealthAgencyId"
          ],
          "relationToFields": [
            "homeHealthAgencyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfFileUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingReportUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "saasAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyInvoiceStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "HomeHealthAgencyInvoiceStatus",
          "default": "DUE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "emailStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingEmailStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billingFaxStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "Invoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Invoice",
          "relationName": "HomeHealthAgencyInvoiceToInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "TrainingMaterial",
      "dbName": null,
      "fields": [
        {
          "name": "trainingMaterialId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "trainingMaterialName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "brochurelUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "videoUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderable",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Orderable",
          "relationName": "OrderableToTrainingMaterial",
          "relationFromFields": [
            "orderableId"
          ],
          "relationToFields": [
            "orderableId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "orderableId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ReminderInstanceToICD10Code",
      "dbName": null,
      "fields": [
        {
          "name": "reminderInstanceToICD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "icd10Code",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ICD10Code",
          "relationName": "ICD10CodeToReminderInstanceToICD10Code",
          "relationFromFields": [
            "iCD10CodeId"
          ],
          "relationToFields": [
            "icd10CodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "iCD10CodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstance",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReminderInstance",
          "relationName": "ReminderInstanceToReminderInstanceToICD10Code",
          "relationFromFields": [
            "reminderInstanceId"
          ],
          "relationToFields": [
            "reminderInstanceId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reminderInstanceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "PatientProgressReport",
      "dbName": null,
      "fields": [
        {
          "name": "patientProgressReportId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToPatientProgressReport",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reportingMonth",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reportingYear",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 1,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "endDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 31,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalReadings",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "lastReadingDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pAlert",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "readingPlusAlert",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "totalCallDurationSec",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "auxiliaryDurationSec",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "lastEncounterDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sortCriteriaReading",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sortCriteriaCalls",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sortCriteriaCombined",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "listOfReadingDates",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "listOfPAlertDates",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "expectedBill",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appliedCPTCodes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dayStatus",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isIncentiveProgram",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDropOff",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callTimeRepord",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CallTimeRecord",
          "relationName": "CallTimeRecordToPatientProgressReport",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReportToCpts",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReportToCpt",
          "relationName": "PatientProgressReportToPatientProgressReportToCpt",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "PatientProgressReportToMessage",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReportToIncentiveProgram",
          "relationName": "PatientProgressReportToPatientProgressReportToIncentiveProgram",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "patientId",
          "reportingMonth",
          "reportingYear"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "patientId",
            "reportingMonth",
            "reportingYear"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "PatientProgressReportToCpt",
      "dbName": null,
      "fields": [
        {
          "name": "patientProgressReportToCptId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReport",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReport",
          "relationName": "PatientProgressReportToPatientProgressReportToCpt",
          "relationFromFields": [
            "patientProgressReportId"
          ],
          "relationToFields": [
            "patientProgressReportId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReportId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CPTCode",
          "relationName": "CPTCodeToPatientProgressReportToCpt",
          "relationFromFields": [
            "cptCodeId"
          ],
          "relationToFields": [
            "cptCodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "appliedDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "patientProgressReportId",
          "cptCodeId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "patientProgressReportId",
            "cptCodeId"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "PatientProgressReportToIncentiveProgram",
      "dbName": null,
      "fields": [
        {
          "name": "patientProgressReportToIncentiveProgramId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReport",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReport",
          "relationName": "PatientProgressReportToPatientProgressReportToIncentiveProgram",
          "relationFromFields": [
            "patientProgressReportId"
          ],
          "relationToFields": [
            "patientProgressReportId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReportId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "messageDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "incentiveProgramType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "IncentiveProgramType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "CallTimeRecord",
      "dbName": null,
      "fields": [
        {
          "name": "callTimeRecordId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "prepTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "handoverTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "escalationTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "commentTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chartReviewTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "networkMissedCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "adhocMissedCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "followUpMissedCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "adhocPopupCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "smsTime",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "regularFollowupCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "manualFollowUpCall",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "adhocReportNetwork",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReportId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientProgressReport",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "PatientProgressReport",
          "relationName": "CallTimeRecordToPatientProgressReport",
          "relationFromFields": [
            "patientProgressReportId"
          ],
          "relationToFields": [
            "patientProgressReportId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "AutoComplete",
      "dbName": null,
      "fields": [
        {
          "name": "autoCompleteId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": {
            "name": "uuid(4)",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "autoCompleteType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "AutoCompleteType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "key",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "value",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "TableColumnConfig",
      "dbName": null,
      "fields": [
        {
          "name": "tableColConfigId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "user",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "TableColumnConfigToUser",
          "relationFromFields": [
            "userId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "userId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "viewName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "colConfig",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "userId",
          "viewName"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "userId",
            "viewName"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "HomeHealthAgency",
      "dbName": null,
      "fields": [
        {
          "name": "homeHealthAgencyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "phoneNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "email",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "address",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "city",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "postalCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "state",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isSaas",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "setupFee",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "flatRate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyMembers",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToHomeHealthAgency",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToHomeHealthAgency",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyInvoice",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgencyInvoice",
          "relationName": "HomeHealthAgencyToHomeHealthAgencyInvoice",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyToCptCode",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgencyToCptCode",
          "relationName": "HomeHealthAgencyToHomeHealthAgencyToCptCode",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "HomeHealthAgencyToCptCode",
      "dbName": null,
      "fields": [
        {
          "name": "homeHealthAgencyToCPTCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CPTCode",
          "relationName": "CPTCodeToHomeHealthAgencyToCptCode",
          "relationFromFields": [
            "cptCodeId"
          ],
          "relationToFields": [
            "cptCodeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgency",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HomeHealthAgency",
          "relationName": "HomeHealthAgencyToHomeHealthAgencyToCptCode",
          "relationFromFields": [
            "homeHealthAgencyId"
          ],
          "relationToFields": [
            "homeHealthAgencyId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "homeHealthAgencyId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "amount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "cptCodeId",
          "homeHealthAgencyId"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "cptCodeId",
            "homeHealthAgencyId"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "TaskCategory",
      "dbName": null,
      "fields": [
        {
          "name": "taskCategoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskCategoryName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "tasks",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Task",
          "relationName": "TaskToTaskCategory",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"task-management\"}"
    },
    {
      "name": "Task",
      "dbName": null,
      "fields": [
        {
          "name": "taskId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskNumber",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Int",
          "default": {
            "name": "autoincrement",
            "args": []
          },
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskCategory",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskCategory",
          "relationName": "TaskToTaskCategory",
          "relationFromFields": [
            "taskCategoryId"
          ],
          "relationToFields": [
            "taskCategoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskCategoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "PatientToTask",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskHistories",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskHistory",
          "relationName": "TaskToTaskHistory",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "documents",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Document",
          "relationName": "DocumentToTask",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"task-management\"}"
    },
    {
      "name": "TaskHistory",
      "dbName": null,
      "fields": [
        {
          "name": "taskHistoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "assigner",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "TaskHistoryToUser",
          "relationFromFields": [
            "assignerId"
          ],
          "relationToFields": [
            "userId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "assignerId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskPriority",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskPriority",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "TaskStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "task",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Task",
          "relationName": "TaskToTaskHistory",
          "relationFromFields": [
            "taskId"
          ],
          "relationToFields": [
            "taskId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "taskId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "assignee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToTaskHistory",
          "relationFromFields": [
            "assigneeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "assigneeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"task-management\"}"
    },
    {
      "name": "State",
      "dbName": null,
      "fields": [
        {
          "name": "stateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cities",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "City",
          "relationName": "CityToState",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "City",
      "dbName": null,
      "fields": [
        {
          "name": "cityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "name",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "isDeleted",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Boolean",
          "default": false,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "stateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "state",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "State",
          "relationName": "CityToState",
          "relationFromFields": [
            "stateId"
          ],
          "relationToFields": [
            "stateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "users",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "User",
          "relationName": "CityToUser",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "EmployeeIncentive",
      "dbName": null,
      "fields": [
        {
          "name": "employeeIncentiveId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToEmployeeIncentive",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "month",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "year",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callCreditRate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callBaseIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "callStretchIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chartRevCreditRate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chartRevBaseIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "chartRevStretchIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "onBoardCreditRate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "onBoardBaseIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "onBoardStretchIncentive",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Float",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [
        [
          "employeeId",
          "month",
          "year"
        ]
      ],
      "uniqueIndexes": [
        {
          "name": null,
          "fields": [
            "employeeId",
            "month",
            "year"
          ]
        }
      ],
      "isGenerated": false
    },
    {
      "name": "RMSFax",
      "dbName": null,
      "fields": [
        {
          "name": "rmsFaxId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "phaxioId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxTo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "faxFrom",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachmentUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacility",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToRMSFax",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "direction",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Direction",
          "default": "SENT",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deliveryStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeliveryStatus",
          "default": "queued",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "processingStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ProcessingStatus",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "statusChangedDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "subject",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "notes",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "statusChangedBy",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "EmployeeToRMSFax",
          "relationFromFields": [
            "statusChangedBy"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "ReconcileInfo",
      "dbName": null,
      "fields": [
        {
          "name": "reconcileInfoId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "referenceNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "practice",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacility",
          "relationName": "HealthcareFacilityToReconcileInfo",
          "relationFromFields": [
            "healthcareFacilityId"
          ],
          "relationToFields": [
            "healthcareFacilityId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileXLSpath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconCleanXLSpath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconReportXLSpath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pracInvPath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileReportPath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "healthcareFacilityInvoiceStatus",
          "default": "DUE",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dueDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "clearedOn",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileToDPCs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileToDPC",
          "relationName": "ReconcileInfoToReconcileToDPC",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconCleanDataTemps",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconCleanDataTemp",
          "relationName": "ReconCleanDataTempToReconcileInfo",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dpcs",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "InvoiceToCptCodeToReconcileInfo",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/reconcile-info\"}"
    },
    {
      "name": "ReconcileToDPC",
      "dbName": null,
      "fields": [
        {
          "name": "reconcileToDPCId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "billedAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "receivedAmount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "shareChi",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sharePractice",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCode",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "InvoiceToCptCode",
          "relationName": "InvoiceToCptCodeToReconcileToDPC",
          "relationFromFields": [
            "invoiceToCptCodeId"
          ],
          "relationToFields": [
            "invoiceToCPTCodeId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "invoiceToCptCodeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfo",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileInfo",
          "relationName": "ReconcileInfoToReconcileToDPC",
          "relationFromFields": [
            "reconcileInfoId"
          ],
          "relationToFields": [
            "reconcileInfoId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfoId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthFacilityInvoice",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "HealthcareFacilityInvoice",
          "relationName": "HealthcareFacilityInvoiceToReconcileToDPC",
          "relationFromFields": [
            "healthcareFacilityInvoiceId"
          ],
          "relationToFields": [
            "healthcareFacilityInvoiceId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "healthcareFacilityInvoiceId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconCleanDataTemp",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconCleanDataTemp",
          "relationName": "ReconCleanDataTempToReconcileToDPC",
          "relationFromFields": [
            "reconCleanDataTempId"
          ],
          "relationToFields": [
            "reconCleanDataTempId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconCleanDataTempId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/reconcile-info\"}"
    },
    {
      "name": "ReconCleanDataTemp",
      "dbName": null,
      "fields": [
        {
          "name": "reconCleanDataTempId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "referenceNo",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfo",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileInfo",
          "relationName": "ReconCleanDataTempToReconcileInfo",
          "relationFromFields": [
            "reconcileInfoId"
          ],
          "relationToFields": [
            "reconcileInfoId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileInfoId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "cptCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateOfService",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "origCptCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "origPatientName",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "origDateOfService",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "String",
          "default": "",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "amount",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "Float",
          "default": 0,
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "ReconCleanStatus",
          "default": "NEW",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "reconcileToDPC",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "ReconcileToDPC",
          "relationName": "ReconCleanDataTempToReconcileToDPC",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false
    },
    {
      "name": "DeviceImportXls",
      "dbName": null,
      "fields": [
        {
          "name": "deviceImportXlsId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "DeviceImportTemp",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceImportTemp",
          "relationName": "DeviceImportTempToDeviceImportXls",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "createdBy",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "DeviceImportXlsToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceImportXLSpath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceProcessedXLSXPath",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/device-import\"}"
    },
    {
      "name": "DeviceImportTemp",
      "dbName": null,
      "fields": [
        {
          "name": "deviceImportTempId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "uniqueCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceIOSCode",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "modelNumber",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "status",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "DeviceImportStatus",
          "default": "NEW",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "comments",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceImportXls",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceImportXls",
          "relationName": "DeviceImportTempToDeviceImportXls",
          "relationFromFields": [
            "deviceImportXlsId"
          ],
          "relationToFields": [
            "deviceImportXlsId"
          ],
          "relationOnDelete": "Cascade",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceImportXlsId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventory",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "DeviceInventory",
          "relationName": "DeviceImportTempToDeviceInventory",
          "relationFromFields": [
            "deviceInventoryId"
          ],
          "relationToFields": [
            "deviceInventoryId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "deviceInventoryId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": true,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/device-import\"}"
    },
    {
      "name": "CcmCarePlanTemplate",
      "dbName": null,
      "fields": [
        {
          "name": "ccmCarePlanTemplate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "title",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoalTemplates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "CcmCarePlanTemplateToCcmGoalTemplate",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmGoalTemplate",
      "dbName": null,
      "fields": [
        {
          "name": "ccmGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glStatement",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "goalType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmMaintainanceGoal",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalTemplates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplate",
          "relationName": "CcmGoalTemplateToCcmSubGoalTemplate",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "attachedToOptions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplateOption",
          "relationName": "CcmGoalTemplateToCcmSubGoalTemplateOption",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmCarePlanTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmCarePlanTemplate",
          "relationName": "CcmCarePlanTemplateToCcmGoalTemplate",
          "relationFromFields": [
            "ccmCarePlanTemplateId"
          ],
          "relationToFields": [
            "ccmCarePlanTemplate"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmCarePlanTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "linkedWithTemplates",
          "relationFromFields": [
            "linkedGoalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedWithGoalTemplates",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "linkedWithTemplates",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalOptions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalOption",
          "relationName": "LinkedWith",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachedToGoals",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoal",
          "relationName": "AttachedWithGoal",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "childGoals",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoal",
          "relationName": "Parent",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmSubGoalTemplate",
      "dbName": null,
      "fields": [
        {
          "name": "ccmSubGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "statement",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "goalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "CcmGoalTemplateToCcmSubGoalTemplate",
          "relationFromFields": [
            "goalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "goalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "whyItMatters",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfDocUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmQuestionType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmQuestionType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "options",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplateOption",
          "relationName": "Direct",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "attacheTodOptions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplateOption",
          "relationName": "Attached",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalOptions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalOption",
          "relationName": "LinkedWith",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "childSubGoals",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoal",
          "relationName": "Parent",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmSubGoalTemplateOption",
      "dbName": null,
      "fields": [
        {
          "name": "optionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "optionStatement",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplate",
          "relationName": "Direct",
          "relationFromFields": [
            "ccmSubGoalTemplateId"
          ],
          "relationToFields": [
            "ccmSubGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachedCcmSubGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplate",
          "relationName": "Attached",
          "relationFromFields": [
            "attachedccmSubGoalTemplateId"
          ],
          "relationToFields": [
            "ccmSubGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachedccmSubGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachedGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "attachedGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "CcmGoalTemplateToCcmSubGoalTemplateOption",
          "relationFromFields": [
            "attachedGoalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmCarePlan",
      "dbName": null,
      "fields": [
        {
          "name": "carePlanId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patient",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Patient",
          "relationName": "CcmCarePlanToPatient",
          "relationFromFields": [
            "patientId"
          ],
          "relationToFields": [
            "patientId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "patientId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "startDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employee",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Employee",
          "relationName": "CcmCarePlanToEmployee",
          "relationFromFields": [
            "employeeId"
          ],
          "relationToFields": [
            "employeeId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "employeeId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoals",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoal",
          "relationName": "CcmCarePlanToCcmGoal",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false,
          "documentation": "{\"includeInCreate\":true}"
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmGoal",
      "dbName": null,
      "fields": [
        {
          "name": "ccmGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glStatement",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "CcmGoalStatus",
          "default": "NEW",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glReviewDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "order",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmMaintainanceGoal",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "carePlan",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmCarePlan",
          "relationName": "CcmCarePlanToCcmGoal",
          "relationFromFields": [
            "carePlanId"
          ],
          "relationToFields": [
            "carePlanId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "carePlanId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoalNotes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalNote",
          "relationName": "CcmGoalToCcmGoalNote",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoals",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoal",
          "relationName": "CcmGoalToCcmSubGoal",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "AttachedWithGoal",
          "relationFromFields": [
            "linkedGoalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parentGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parentGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "Parent",
          "relationFromFields": [
            "parentGoalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmSubGoal",
      "dbName": null,
      "fields": [
        {
          "name": "ccmSubGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglTitle",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglStatement",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmQuestionType",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmQuestionType",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglStatus",
          "kind": "enum",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": true,
          "type": "CcmSubGoalStatus",
          "default": "NEW",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglReviewDate",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "order",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "whyItMatters",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "pdfDocUrl",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoal",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoal",
          "relationName": "CcmGoalToCcmSubGoal",
          "relationFromFields": [
            "ccmGoalId"
          ],
          "relationToFields": [
            "ccmGoalId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parentSubGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "parentSubGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplate",
          "relationName": "Parent",
          "relationFromFields": [
            "parentSubGoalTemplateId"
          ],
          "relationToFields": [
            "ccmSubGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalNotes",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalNote",
          "relationName": "CcmSubGoalToCcmSubGoalNote",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalOptions",
          "kind": "object",
          "isList": true,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalOption",
          "relationName": "CcmSubGoalToCcmSubGoalOption",
          "relationFromFields": [],
          "relationToFields": [],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmSubGoalOption",
      "dbName": null,
      "fields": [
        {
          "name": "ccmSubGoalOptionId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "optionStatement",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "answer",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Boolean",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "order",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "Int",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoal",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoal",
          "relationName": "CcmSubGoalToCcmSubGoalOption",
          "relationFromFields": [
            "ccmSubGoalId"
          ],
          "relationToFields": [
            "ccmSubGoalId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoalTemplate",
          "relationName": "LinkedWith",
          "relationFromFields": [
            "linkedGoalTemplateId"
          ],
          "relationToFields": [
            "ccmGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedSubGoalTemplateId",
          "kind": "scalar",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "linkedSubGoalTemplate",
          "kind": "object",
          "isList": false,
          "isRequired": false,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoalTemplate",
          "relationName": "LinkedWith",
          "relationFromFields": [
            "linkedSubGoalTemplateId"
          ],
          "relationToFields": [
            "ccmSubGoalTemplateId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmGoalNote",
      "dbName": null,
      "fields": [
        {
          "name": "ccmGoalNotesId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "glNote",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoal",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmGoal",
          "relationName": "CcmGoalToCcmGoalNote",
          "relationFromFields": [
            "ccmGoalId"
          ],
          "relationToFields": [
            "ccmGoalId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    },
    {
      "name": "CcmSubGoalNote",
      "dbName": null,
      "fields": [
        {
          "name": "ccmSubGoalNoteId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": true,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "sglNote",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoal",
          "kind": "object",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "CcmSubGoal",
          "relationName": "CcmSubGoalToCcmSubGoalNote",
          "relationFromFields": [
            "ccmSubGoalId"
          ],
          "relationToFields": [
            "ccmSubGoalId"
          ],
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "ccmSubGoalId",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": true,
          "hasDefaultValue": false,
          "type": "String",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateCreated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        },
        {
          "name": "dateUpdated",
          "kind": "scalar",
          "isList": false,
          "isRequired": true,
          "isUnique": false,
          "isId": false,
          "isReadOnly": false,
          "hasDefaultValue": false,
          "type": "BigInt",
          "isGenerated": false,
          "isUpdatedAt": false
        }
      ],
      "primaryKey": null,
      "uniqueFields": [],
      "uniqueIndexes": [],
      "isGenerated": false,
      "documentation": "{\"modulePath\": \"src/workflows/ccm-module\"}"
    }
  ],
  "enums": [
    {
      "name": "Gender",
      "values": [
        {
          "name": "MALE",
          "dbName": null
        },
        {
          "name": "FEMALE",
          "dbName": null
        },
        {
          "name": "OTHER",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "EventLogType",
      "values": [
        {
          "name": "CALL",
          "dbName": null
        },
        {
          "name": "TAKEN",
          "dbName": null
        },
        {
          "name": "MISSED",
          "dbName": null
        },
        {
          "name": "NOTIFICATION_SENT",
          "dbName": null
        },
        {
          "name": "NOTIFICATION_FAILED",
          "dbName": null
        },
        {
          "name": "ON_BOARDING_COMPLETED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ActionsType",
      "values": [
        {
          "name": "LOG_IN",
          "dbName": null
        },
        {
          "name": "LOG_OUT",
          "dbName": null
        },
        {
          "name": "SESSION_TIMEOUT",
          "dbName": null
        },
        {
          "name": "PATIENT_REGISTERED",
          "dbName": null
        },
        {
          "name": "PATIENT_ON_BOARDED",
          "dbName": null
        },
        {
          "name": "ADDVERSE_EVENT_ADDED",
          "dbName": null
        },
        {
          "name": "RECORD_UPDATED",
          "dbName": null
        },
        {
          "name": "RECORD_ACCESSED",
          "dbName": null
        },
        {
          "name": "MAKE_CALL",
          "dbName": null
        },
        {
          "name": "CALL_ACCEPTED",
          "dbName": null
        },
        {
          "name": "CALL_CLOSED",
          "dbName": null
        },
        {
          "name": "CALL_MISSED",
          "dbName": null
        },
        {
          "name": "CALL_RECORDING_PLAYBACK",
          "dbName": null
        },
        {
          "name": "CREATE_EMPLOYEE",
          "dbName": null
        },
        {
          "name": "UPDATED_EMPLOYEE",
          "dbName": null
        },
        {
          "name": "ROLE_CREATED",
          "dbName": null
        },
        {
          "name": "ROLE_UPDATED",
          "dbName": null
        },
        {
          "name": "PRIVILEGES_ASSIGNED",
          "dbName": null
        },
        {
          "name": "GENERIC_ADMIN_ACTIVITY",
          "dbName": null
        },
        {
          "name": "ORDERABLE_UPDATED",
          "dbName": null
        },
        {
          "name": "ORDERABLE_ASSIGNED",
          "dbName": null
        },
        {
          "name": "ORDERABLE_UN_ASSIGNED",
          "dbName": null
        },
        {
          "name": "MESSAGE_DEVLIVERED",
          "dbName": null
        },
        {
          "name": "FAILED_TO_SEND_MESSAGE",
          "dbName": null
        },
        {
          "name": "NEW_ESCALATION",
          "dbName": null
        },
        {
          "name": "NEW_MESSAGE",
          "dbName": null
        },
        {
          "name": "ESCALATION_CLOSED",
          "dbName": null
        },
        {
          "name": "OBSERVATION_RECIEVED",
          "dbName": null
        },
        {
          "name": "OBSERVATION_UPDATED",
          "dbName": null
        },
        {
          "name": "REPORT_CREATED",
          "dbName": null
        },
        {
          "name": "REPORT_ACCESSED",
          "dbName": null
        },
        {
          "name": "REPORT_DOWNLOADED",
          "dbName": null
        },
        {
          "name": "ORDER_CREATED",
          "dbName": null
        },
        {
          "name": "ORDER_DELETED",
          "dbName": null
        },
        {
          "name": "ORDER_EDITED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AuditModuleType",
      "values": [
        {
          "name": "SYSTEM",
          "dbName": null
        },
        {
          "name": "PATIENT_RECORD",
          "dbName": null
        },
        {
          "name": "APPOINTMENT",
          "dbName": null
        },
        {
          "name": "CONSULTATION",
          "dbName": null
        },
        {
          "name": "BILL_PAYMENTS",
          "dbName": null
        },
        {
          "name": "CALLS",
          "dbName": null
        },
        {
          "name": "ADMIN",
          "dbName": null
        },
        {
          "name": "SUBSCRIPTION",
          "dbName": null
        },
        {
          "name": "ORDERABLE",
          "dbName": null
        },
        {
          "name": "NOTIFICATIONS",
          "dbName": null
        },
        {
          "name": "COMMAND_CENTER",
          "dbName": null
        },
        {
          "name": "REPORTS",
          "dbName": null
        },
        {
          "name": "DOCTORS_SETTINGS",
          "dbName": null
        },
        {
          "name": "ROLES",
          "dbName": null
        },
        {
          "name": "IPD",
          "dbName": null
        },
        {
          "name": "ADMISSION_CONTROLLER",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "PatientType",
      "values": [
        {
          "name": "ACUTE",
          "dbName": null
        },
        {
          "name": "CHRONIC",
          "dbName": null
        },
        {
          "name": "REMOTE_MONITORING",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "EmployeeType",
      "values": [
        {
          "name": "CHI_US",
          "dbName": null
        },
        {
          "name": "CHI_PAK",
          "dbName": null
        },
        {
          "name": "PRACTICE_EMPLOYEE",
          "dbName": null
        },
        {
          "name": "AGENCY_EMPLOYEE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "InsuranceStatus",
      "values": [
        {
          "name": "INSURED",
          "dbName": null
        },
        {
          "name": "COPAY",
          "dbName": null
        },
        {
          "name": "WONT_COPAY",
          "dbName": null
        },
        {
          "name": "UNINSURED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "TrainingMaterialType",
      "values": [
        {
          "name": "BROCHURE",
          "dbName": null
        },
        {
          "name": "DEVICE_VIDEO_TUTORIAL",
          "dbName": null
        },
        {
          "name": "CHARMS_TUTORIAL",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AnnoucementsUnit",
      "values": [
        {
          "name": "ALL",
          "dbName": null
        },
        {
          "name": "PUSH_NOTIFICATIONS",
          "dbName": null
        },
        {
          "name": "EMAIL",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AnnouncementTo",
      "values": [
        {
          "name": "PATIENTS",
          "dbName": null
        },
        {
          "name": "PRACTICES",
          "dbName": null
        },
        {
          "name": "PRACTICES_EMPLOYEES",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "RepeatTimeUnit",
      "values": [
        {
          "name": "DAY",
          "dbName": null
        },
        {
          "name": "WEEK",
          "dbName": null
        },
        {
          "name": "MONTH",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CodeType",
      "values": [
        {
          "name": "ACCOUNT_VERIFICATION",
          "dbName": null
        },
        {
          "name": "VERIFY_PHONE",
          "dbName": null
        },
        {
          "name": "FORGOT_PASSWORD",
          "dbName": null
        },
        {
          "name": "TWO_FACTOR_LOGIN",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ResultableDataType",
      "values": [
        {
          "name": "NUMBER",
          "dbName": null
        },
        {
          "name": "TEXT",
          "dbName": null
        },
        {
          "name": "DATA",
          "dbName": null
        },
        {
          "name": "FILEURL",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "OrderableStatus",
      "values": [
        {
          "name": "SEEN",
          "dbName": null
        },
        {
          "name": "UNHANDLED",
          "dbName": null
        },
        {
          "name": "HANDLED",
          "dbName": null
        },
        {
          "name": "INVALID",
          "dbName": null
        },
        {
          "name": "ESCALATED_TO_RN",
          "dbName": null
        },
        {
          "name": "ESCALATED_TO_PRACTICE",
          "dbName": null
        },
        {
          "name": "ESCALATED_AND_HANDLED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "OrderableColorStatus",
      "values": [
        {
          "name": "NORMAL",
          "dbName": null
        },
        {
          "name": "ABNORMAL",
          "dbName": null
        },
        {
          "name": "WARNING",
          "dbName": null
        },
        {
          "name": "CRITICAL",
          "dbName": null
        },
        {
          "name": "INVALID",
          "dbName": null
        },
        {
          "name": "UNKNOWN",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MessageContentType",
      "values": [
        {
          "name": "TEXT",
          "dbName": null
        },
        {
          "name": "AUDIO",
          "dbName": null
        },
        {
          "name": "VIDEO",
          "dbName": null
        },
        {
          "name": "PDF",
          "dbName": null
        },
        {
          "name": "IMAGE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ResultableStatus",
      "values": [
        {
          "name": "ABNORMAL_LOW",
          "dbName": null
        },
        {
          "name": "CRITICAL_LOW",
          "dbName": null
        },
        {
          "name": "WARNING_LOW",
          "dbName": null
        },
        {
          "name": "NORMAL",
          "dbName": null
        },
        {
          "name": "WARNING_HIGH",
          "dbName": null
        },
        {
          "name": "CRITIAL_HIGH",
          "dbName": null
        },
        {
          "name": "ABNORMAL_HIGH",
          "dbName": null
        },
        {
          "name": "UNKNOWN",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "OrderableType",
      "values": [
        {
          "name": "VITAL",
          "dbName": null
        },
        {
          "name": "HOMECARE",
          "dbName": null
        },
        {
          "name": "MEDICINE",
          "dbName": null
        },
        {
          "name": "RADIOLOGY",
          "dbName": null
        },
        {
          "name": "LAB",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "OrderType",
      "values": [
        {
          "name": "DAILY",
          "dbName": null
        },
        {
          "name": "WEEKLY",
          "dbName": null
        },
        {
          "name": "ADVANCED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MessageWorkflow",
      "values": [
        {
          "name": "ESCALATED",
          "dbName": null
        },
        {
          "name": "RESPONDED",
          "dbName": null
        },
        {
          "name": "CLOSED",
          "dbName": null
        },
        {
          "name": "ORDERABLE",
          "dbName": null
        },
        {
          "name": "GENERAL",
          "dbName": null
        },
        {
          "name": "HANDOVERSHEET",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "SmsStatus",
      "values": [
        {
          "name": "sent",
          "dbName": null
        },
        {
          "name": "delivery_unknown",
          "dbName": null
        },
        {
          "name": "delivered",
          "dbName": null
        },
        {
          "name": "undelivered",
          "dbName": null
        },
        {
          "name": "failed",
          "dbName": null
        },
        {
          "name": "queued",
          "dbName": null
        },
        {
          "name": "sending",
          "dbName": null
        },
        {
          "name": "receiving",
          "dbName": null
        },
        {
          "name": "received",
          "dbName": null
        },
        {
          "name": "accepted",
          "dbName": null
        },
        {
          "name": "scheduled",
          "dbName": null
        },
        {
          "name": "read",
          "dbName": null
        },
        {
          "name": "partially_delivered",
          "dbName": null
        },
        {
          "name": "canceled",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "HandOverSheetStatus",
      "values": [
        {
          "name": "READINGSUNREMARKABLE",
          "dbName": null
        },
        {
          "name": "READINGSDISCUSSION",
          "dbName": null
        },
        {
          "name": "READINGSDISCUSSED",
          "dbName": null
        },
        {
          "name": "READINGSONHOLD",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MessageDeliveryStatus",
      "values": [
        {
          "name": "SENT",
          "dbName": null
        },
        {
          "name": "DELIVERED",
          "dbName": null
        },
        {
          "name": "SEEN",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "Theme",
      "values": [
        {
          "name": "LIGHT",
          "dbName": null
        },
        {
          "name": "DARK",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AdmissionStatus",
      "values": [
        {
          "name": "NOT_ADMITTED",
          "dbName": null
        },
        {
          "name": "ADMITTED",
          "dbName": null
        },
        {
          "name": "DISCHARGED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ActivationStatus",
      "values": [
        {
          "name": "REFERRED",
          "dbName": null
        },
        {
          "name": "INSURANCE_VERIFIED",
          "dbName": null
        },
        {
          "name": "ACCEPTED",
          "dbName": null
        },
        {
          "name": "DECLINED",
          "dbName": null
        },
        {
          "name": "DID_NOT_ANSWER",
          "dbName": null
        },
        {
          "name": "TRAINING_SCHEDULED",
          "dbName": null
        },
        {
          "name": "ASSIGNED",
          "dbName": null
        },
        {
          "name": "ACTIVE",
          "dbName": null
        },
        {
          "name": "INACTIVE",
          "dbName": null
        },
        {
          "name": "TERMINATE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DeviceStatus",
      "values": [
        {
          "name": "AVAILABLE",
          "dbName": null
        },
        {
          "name": "ASSIGNED",
          "dbName": null
        },
        {
          "name": "UN_ASSIGNED",
          "dbName": null
        },
        {
          "name": "INITIATE_RETURN",
          "dbName": null
        },
        {
          "name": "DEVICE_LOST",
          "dbName": null
        },
        {
          "name": "DAMAGED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DeviceOrderType",
      "values": [
        {
          "name": "ORDER",
          "dbName": null
        },
        {
          "name": "INVENTORY_ADDED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "PreferTime",
      "values": [
        {
          "name": "MORNING",
          "dbName": null
        },
        {
          "name": "AFTERNOON",
          "dbName": null
        },
        {
          "name": "EVENING",
          "dbName": null
        },
        {
          "name": "ANYTIME",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "IssueStatus",
      "values": [
        {
          "name": "RESOLVED",
          "dbName": null
        },
        {
          "name": "UNRESOLVED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "FlagStatus",
      "values": [
        {
          "name": "APP",
          "dbName": null
        },
        {
          "name": "DEVICE",
          "dbName": null
        },
        {
          "name": "READINGS",
          "dbName": null
        },
        {
          "name": "OTHER",
          "dbName": null
        },
        {
          "name": "SUGGESTIONS",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "EmailFaxTypes",
      "values": [
        {
          "name": "FINANCIAL_FAX",
          "dbName": null
        },
        {
          "name": "FINANCIAL_EMAIL",
          "dbName": null
        },
        {
          "name": "PRACTICE_FAX",
          "dbName": null
        },
        {
          "name": "PRACTICE_EMAIL",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "Medium",
      "values": [
        {
          "name": "CHARMS",
          "dbName": null
        },
        {
          "name": "SMS",
          "dbName": null
        },
        {
          "name": "WHATSAPP",
          "dbName": null
        },
        {
          "name": "ALERT",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "SubjectStatus",
      "values": [
        {
          "name": "NEW",
          "dbName": null
        },
        {
          "name": "CLOSED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MessageCategory",
      "values": [
        {
          "name": "NORMAL",
          "dbName": null
        },
        {
          "name": "PALERT",
          "dbName": null
        },
        {
          "name": "INCENTIVE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DeviceCommProtocol",
      "values": [
        {
          "name": "BLUETOOTH",
          "dbName": null
        },
        {
          "name": "GSM",
          "dbName": null
        },
        {
          "name": "WIFI",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ExternalCommunicationPlatforms",
      "values": [
        {
          "name": "SMS",
          "dbName": null
        },
        {
          "name": "EMAIL",
          "dbName": null
        },
        {
          "name": "FAX",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "emailSentTo",
      "values": [
        {
          "name": "PATIENT",
          "dbName": null
        },
        {
          "name": "HEALTHCARE_FACILITY",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CommunicationSentTo",
      "values": [
        {
          "name": "PATIENT",
          "dbName": null
        },
        {
          "name": "HEALTHCARE_FACILITY",
          "dbName": null
        },
        {
          "name": "EMPLOYEE",
          "dbName": null
        },
        {
          "name": "HOME_HEALTH_AGENCY",
          "dbName": null
        },
        {
          "name": "PATIENT_AND_EMPLOYEE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "SessionEventTypes",
      "values": [
        {
          "name": "AppInstalled",
          "dbName": null
        },
        {
          "name": "LoggedIn",
          "dbName": null
        },
        {
          "name": "LoggedOut",
          "dbName": null
        },
        {
          "name": "PhoneStarted",
          "dbName": null
        },
        {
          "name": "PhoneShutdown",
          "dbName": null
        },
        {
          "name": "UIAppStarted",
          "dbName": null
        },
        {
          "name": "UIAppStopped",
          "dbName": null
        },
        {
          "name": "SvcAppStarted",
          "dbName": null
        },
        {
          "name": "SvcAppStopped",
          "dbName": null
        },
        {
          "name": "PmsStarted",
          "dbName": null
        },
        {
          "name": "PmsStopped",
          "dbName": null
        },
        {
          "name": "DmsStarted",
          "dbName": null
        },
        {
          "name": "DmsStopped",
          "dbName": null
        },
        {
          "name": "BtEnabled",
          "dbName": null
        },
        {
          "name": "BtDisabled",
          "dbName": null
        },
        {
          "name": "InetEnabled",
          "dbName": null
        },
        {
          "name": "InetDisabled",
          "dbName": null
        },
        {
          "name": "Location",
          "dbName": null
        },
        {
          "name": "LocEnabled",
          "dbName": null
        },
        {
          "name": "LocDisabled",
          "dbName": null
        },
        {
          "name": "Battery",
          "dbName": null
        },
        {
          "name": "BatteryNormal",
          "dbName": null
        },
        {
          "name": "BatteryCritical",
          "dbName": null
        },
        {
          "name": "AppVersion",
          "dbName": null
        },
        {
          "name": "DV_GetAdmissionDevices",
          "dbName": null
        },
        {
          "name": "DV_LocalDBUpdated",
          "dbName": null
        },
        {
          "name": "DV_ReadDB",
          "dbName": null
        },
        {
          "name": "DV_RetrieveKnownPeripheral",
          "dbName": null
        },
        {
          "name": "DV_UnpairDevice",
          "dbName": null
        },
        {
          "name": "DV_CallConnectOnPeripheral",
          "dbName": null
        },
        {
          "name": "DV_PeripheralConnected",
          "dbName": null
        },
        {
          "name": "DV_PeripheralDisconnected",
          "dbName": null
        },
        {
          "name": "GoingToBackground",
          "dbName": null
        },
        {
          "name": "GoingToForeground",
          "dbName": null
        },
        {
          "name": "WillBeTerminated",
          "dbName": null
        },
        {
          "name": "ScanningStarted",
          "dbName": null
        },
        {
          "name": "DV_Discovered",
          "dbName": null
        },
        {
          "name": "ForgettingPatientDetails",
          "dbName": null
        },
        {
          "name": "AppWoken",
          "dbName": null
        },
        {
          "name": "Generic",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "SessionEventFrom",
      "values": [
        {
          "name": "PMS",
          "dbName": null
        },
        {
          "name": "SvcApp",
          "dbName": null
        },
        {
          "name": "App",
          "dbName": null
        },
        {
          "name": "UIApp",
          "dbName": null
        },
        {
          "name": "DMS",
          "dbName": null
        },
        {
          "name": "Monitor",
          "dbName": null
        },
        {
          "name": "BTC",
          "dbName": null
        },
        {
          "name": "Scanner",
          "dbName": null
        },
        {
          "name": "DeviceHandler",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MonitoringEventTypes",
      "values": [
        {
          "name": "MedicalDevice",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MobileOS",
      "values": [
        {
          "name": "Android",
          "dbName": null
        },
        {
          "name": "iOS",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "MonitoringEventFrom",
      "values": [
        {
          "name": "Service",
          "dbName": null
        },
        {
          "name": "Monitor",
          "dbName": null
        },
        {
          "name": "Device",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AppSessionStatus",
      "values": [
        {
          "name": "Offline",
          "dbName": null
        },
        {
          "name": "Online",
          "dbName": null
        },
        {
          "name": "LoggedOut",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DocumentType",
      "values": [
        {
          "name": "MONTHLY_REPORT",
          "dbName": null
        },
        {
          "name": "FOLLOW_UP_REPORT",
          "dbName": null
        },
        {
          "name": "HANDOVER_SHEET",
          "dbName": null
        },
        {
          "name": "ALERT_REPORT",
          "dbName": null
        },
        {
          "name": "MISSED_CALL_LOGS",
          "dbName": null
        },
        {
          "name": "PATIENT_PROGRESS_REPORT",
          "dbName": null
        },
        {
          "name": "ESCALATION_SUMMARY",
          "dbName": null
        },
        {
          "name": "ADHOC_CALL_REPORT",
          "dbName": null
        },
        {
          "name": "LIBRE_REPORT",
          "dbName": null
        },
        {
          "name": "FIRST_CHECKLIST",
          "dbName": null
        },
        {
          "name": "PRE_AUTHORIZATION",
          "dbName": null
        },
        {
          "name": "CARE_PLAN",
          "dbName": null
        },
        {
          "name": "Task_MANEGEMENT",
          "dbName": null
        },
        {
          "name": "READINGS_REPORT",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DurationType",
      "values": [
        {
          "name": "HANDOVER",
          "dbName": null
        },
        {
          "name": "PREP_TIME",
          "dbName": null
        },
        {
          "name": "CHART_REVIEW",
          "dbName": null
        },
        {
          "name": "COMMENT",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CallStatus",
      "values": [
        {
          "name": "PICKED",
          "dbName": null
        },
        {
          "name": "DID_NOT_ANSWER",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CallType",
      "values": [
        {
          "name": "NETWORK",
          "dbName": null
        },
        {
          "name": "CHARMS",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CallReason",
      "values": [
        {
          "name": "TRAINING",
          "dbName": null
        },
        {
          "name": "FOLLOW_UP",
          "dbName": null
        },
        {
          "name": "ADHOC_FOLLOWUP",
          "dbName": null
        },
        {
          "name": "ADHOC_CALL",
          "dbName": null
        },
        {
          "name": "HANDOVER",
          "dbName": null
        },
        {
          "name": "ESCALATION",
          "dbName": null
        },
        {
          "name": "UNKNOWN",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ReminderInstanceStatus",
      "values": [
        {
          "name": "BOOKED",
          "dbName": null
        },
        {
          "name": "CANCELLED",
          "dbName": null
        },
        {
          "name": "COMPLETED",
          "dbName": null
        },
        {
          "name": "DID_NOT_ANSWER",
          "dbName": null
        },
        {
          "name": "RESHEDULED",
          "dbName": null
        },
        {
          "name": "MISSED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AnswerType",
      "values": [
        {
          "name": "SINGLE_LINE",
          "dbName": null
        },
        {
          "name": "MULTI_LINE",
          "dbName": null
        },
        {
          "name": "BOOLEAN",
          "dbName": null
        },
        {
          "name": "SINGLE_CHOICE",
          "dbName": null
        },
        {
          "name": "MULTI_CHOICE",
          "dbName": null
        },
        {
          "name": "SPECIAL_BOOLEAN",
          "dbName": null
        },
        {
          "name": "FOLLOW_UP_TIME",
          "dbName": null
        },
        {
          "name": "SINGLE_LINE_CHOICE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "QUQuestionnaireType",
      "values": [
        {
          "name": "FIRST_CHECKLIST",
          "dbName": null
        },
        {
          "name": "SECOND_CHECKLIST",
          "dbName": null
        },
        {
          "name": "FOLLOW_UP",
          "dbName": null
        },
        {
          "name": "ESCALATION",
          "dbName": null
        },
        {
          "name": "MISCELLANEOUS",
          "dbName": null
        },
        {
          "name": "LEVEL1_QUESTIONNAIRE",
          "dbName": null
        },
        {
          "name": "LEVEL2_QUESTIONNAIRE",
          "dbName": null
        },
        {
          "name": "PATIENT_ENGAGEMENT",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "NotificationType",
      "values": [
        {
          "name": "info",
          "dbName": null
        },
        {
          "name": "error",
          "dbName": null
        },
        {
          "name": "warning",
          "dbName": null
        },
        {
          "name": "success",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "NotificationCategory",
      "values": [
        {
          "name": "APPOINTMENT",
          "dbName": null
        },
        {
          "name": "VITAL",
          "dbName": null
        },
        {
          "name": "ESCALATION",
          "dbName": null
        },
        {
          "name": "ANNOUCEMENTS",
          "dbName": null
        },
        {
          "name": "TASKS",
          "dbName": null
        },
        {
          "name": "PALERT",
          "dbName": null
        },
        {
          "name": "FAXES",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "InvoiceStatus",
      "values": [
        {
          "name": "PROFORMA",
          "dbName": null
        },
        {
          "name": "OVERDUE",
          "dbName": null
        },
        {
          "name": "INVOICED",
          "dbName": null
        },
        {
          "name": "PAID_DISCOUNTED",
          "dbName": null
        },
        {
          "name": "PAID_FULL",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "healthcareFacilityInvoiceStatus",
      "values": [
        {
          "name": "DUE",
          "dbName": null
        },
        {
          "name": "OVERDUE",
          "dbName": null
        },
        {
          "name": "PAID",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "HomeHealthAgencyInvoiceStatus",
      "values": [
        {
          "name": "DUE",
          "dbName": null
        },
        {
          "name": "OVERDUE",
          "dbName": null
        },
        {
          "name": "PAID",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CommunicationMethod",
      "values": [
        {
          "name": "EMAIL",
          "dbName": null
        },
        {
          "name": "FAX",
          "dbName": null
        },
        {
          "name": "SMS",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "InvoiceToCptCodeStatus",
      "values": [
        {
          "name": "PROFORMA",
          "dbName": null
        },
        {
          "name": "PARTIAL",
          "dbName": null
        },
        {
          "name": "OVERDUE",
          "dbName": null
        },
        {
          "name": "INVOICED",
          "dbName": null
        },
        {
          "name": "PAID_DISCOUNTED",
          "dbName": null
        },
        {
          "name": "PAID_FULL",
          "dbName": null
        },
        {
          "name": "REJECTED_OR_DECLINED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "InvoicePaymentMode",
      "values": [
        {
          "name": "PAY_WHEN_PAID",
          "dbName": null
        },
        {
          "name": "NET30",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "IncentiveProgramType",
      "values": [
        {
          "name": "INCENTIVE_MESSAGE",
          "dbName": null
        },
        {
          "name": "INITIAL_MESSAGE",
          "dbName": null
        },
        {
          "name": "REMINDER_MESSAGE",
          "dbName": null
        },
        {
          "name": "ON_TARGET",
          "dbName": null
        },
        {
          "name": "BEHIND_TARGET",
          "dbName": null
        },
        {
          "name": "READINGS_COMPLETE_MESSAGE",
          "dbName": null
        },
        {
          "name": "DROP_OFF",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "AutoCompleteType",
      "values": [
        {
          "name": "ADHOC_CALL",
          "dbName": null
        },
        {
          "name": "NURSE_NOTES",
          "dbName": null
        },
        {
          "name": "DOCTOR_NOTES",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "TaskStatus",
      "values": [
        {
          "name": "NOT_STARTED",
          "dbName": null
        },
        {
          "name": "STARTED",
          "dbName": null
        },
        {
          "name": "COMPLETED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "TaskPriority",
      "values": [
        {
          "name": "LOW_PRIORITY",
          "dbName": null
        },
        {
          "name": "MEDIUM_PRIORITY",
          "dbName": null
        },
        {
          "name": "HIGH_PRIORITY",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "Direction",
      "values": [
        {
          "name": "SENT",
          "dbName": null
        },
        {
          "name": "RECEIVED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DeliveryStatus",
      "values": [
        {
          "name": "queued",
          "dbName": null
        },
        {
          "name": "pendingbatch",
          "dbName": null
        },
        {
          "name": "inprogress",
          "dbName": null
        },
        {
          "name": "success",
          "dbName": null
        },
        {
          "name": "failure",
          "dbName": null
        },
        {
          "name": "partialsuccess",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ProcessingStatus",
      "values": [
        {
          "name": "PROCESSED",
          "dbName": null
        },
        {
          "name": "NEW",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "ReconCleanStatus",
      "values": [
        {
          "name": "NEW",
          "dbName": null
        },
        {
          "name": "MATCH_EXACT",
          "dbName": null
        },
        {
          "name": "MATCH_MONTH",
          "dbName": null
        },
        {
          "name": "MATCH_SET",
          "dbName": null
        },
        {
          "name": "MATCH_AI",
          "dbName": null
        },
        {
          "name": "FORCE_UPDATE",
          "dbName": null
        },
        {
          "name": "ERROR",
          "dbName": null
        },
        {
          "name": "DUPLICATE",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "DeviceImportStatus",
      "values": [
        {
          "name": "NEW",
          "dbName": null
        },
        {
          "name": "SUCCESS",
          "dbName": null
        },
        {
          "name": "ERROR",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CcmGoalType",
      "values": [
        {
          "name": "SCREENING",
          "dbName": null
        },
        {
          "name": "STANDARD_GOAL",
          "dbName": null
        }
      ],
      "dbName": null,
      "documentation": "//////////////////////////////////////////////===============================================================///// CCM"
    },
    {
      "name": "CcmGoalStatus",
      "values": [
        {
          "name": "NEW",
          "dbName": null
        },
        {
          "name": "COMPLETED",
          "dbName": null
        },
        {
          "name": "STARTED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CcmSubGoalStatus",
      "values": [
        {
          "name": "NEW",
          "dbName": null
        },
        {
          "name": "COMPLETED",
          "dbName": null
        },
        {
          "name": "STARTED",
          "dbName": null
        }
      ],
      "dbName": null
    },
    {
      "name": "CcmQuestionType",
      "values": [
        {
          "name": "MULTI_SELECT",
          "dbName": null
        },
        {
          "name": "SINGLE_SELECT",
          "dbName": null
        },
        {
          "name": "MULTI_SELECT_WITH_COMMENT",
          "dbName": null
        },
        {
          "name": "SINGLE_SELECT_WITH_COMMENT",
          "dbName": null
        },
        {
          "name": "SINGLE_LINE",
          "dbName": null
        }
      ],
      "dbName": null
    }
  ],
  "types": []
}