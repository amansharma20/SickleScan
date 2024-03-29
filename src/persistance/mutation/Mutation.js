/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLMutation = {
  ADD_SickleScan_Test: gql`
  mutation MyMutation ($PatientId:Int!,$SickleScanTestResult: String!,$TestImageStoragePath:String!){
    AddSickleScanTestMutation {
      AddTestForPatient(PatientId: $PatientId, SickleScanTestResult: $SickleScanTestResult, TestImageStoragePath: $TestImageStoragePath)
    }
  }
`, ADD_PATIENT_DETAILS: gql`
mutation MyMutation ($FullName:String!,$DateOfBirth:DateTime!,$MobileNumber:String!,$Email:String!,$Gender:String!,$AadharAvailable:Boolean!,$AadharNumber:String!,$GuardianName:String!,$GuardianRelationship:String!,$GuardianIDAvailable:Boolean!,$GuardianIDNumber:String!,$CareOf:String!,$HouseNumber:String!,$Street:String!,$Area:String!,$PostOffice:String!,$District:String!,$State:String!,$PinCode:String!,$Country:String!,$City:String!){
    AddPatientMutation {
      AddPatientDetail(FullName: $FullName,DateOfBirth: $DateOfBirth,MobileNumber: $MobileNumber,Email: $Email,Gender: $Gender,AadharAvailable: $AadharAvailable,AadharNumber: $AadharNumber,GuardianName: $GuardianName,GuardianRelationship: $GuardianRelationship,GuardianIDAvailable: $GuardianIDAvailable,GuardianIDNumber: $GuardianIDNumber,CareOf: $CareOf,HouseNumber: $HouseNumber,Street: $Street,Area: $Area,PostOffice: $PostOffice,District: $District,State: $State,PinCode: $PinCode,Country: $Country,City: $City){
        Id
        UniqueID
        AadharNumber
        Area
        CareOf
        City
        Country
        DateOfBirth
        FullName
        Gender
        MobileNumber
        Street
      }
    }
  }
  `,
  ADD_TEST: gql`
  mutation MyMutation($PatientId: Long!, $SickleScanTestResult: String!, $BloodTransfusion: Boolean!, $ConsentFromPerson: Boolean!) {
    AddSickleScanTestMutation {
      AddTestForPatient(
          PatientId: $PatientId,
          SickleScanTestResult: $SickleScanTestResult
          BloodTransfusion: $BloodTransfusion
          ConsentFromPerson: $ConsentFromPerson
          ){
            Id
          }
      }
    }
  
  `
};


