import { Component, OnInit } from '@angular/core';

import { Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';
import { HomeService } from 'src/app/component/service/home.service';
import {CustomValidation} from '../../../validation/validation-massages' ;
import { RegisterModel } from './register.model';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/component/validation/custom.validator';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public massage:string = "successfully "
  public url: any ;
  CustomValidator = CustomValidation ;
  registerForm: FormGroup;
  isFormSaving: boolean | undefined;
  openDialogInMode!: string;
  customerForm: any;
  hide = true;
  public hidede = true;
  public objCustomerModel :string | undefined ;
  public ObjRegisterModel = RegisterModel ;


  arrState = [
    { abbreviation: 'Andhra Pradesh', stateName: 'Andhra Pradesh' },
    { abbreviation: 'Arunachal Pradesh', stateName: 'Arunachal Pradesh' },
    { abbreviation: 'Assam', stateName: 'Assam' },
    { abbreviation: 'Bihar', stateName: 'Bihar' },
    { abbreviation: 'Chhattisgarh', stateName: 'Chhattisgarh' },
    { abbreviation: 'Goa', stateName: 'Goa' },
    { abbreviation: 'Gujarat', stateName: 'Gujarat' },
    { abbreviation: 'Haryana', stateName: 'Haryana' },
    { abbreviation: 'Himachal Pradesh', stateName: 'Himachal Pradesh' },
    { abbreviation: 'Jammu and Kashmir', stateName: 'Jammu and Kashmir' },
    { abbreviation: 'Jharkhand', stateName: 'Jharkhand' },
    { abbreviation: 'Karnataka', stateName: 'Karnataka' },
    { abbreviation: 'Kerala', stateName: 'Kerala' },
    { abbreviation: 'Madhya Pradesh', stateName: 'Madhya Pradesh' },
    { abbreviation: 'Maharashtra', stateName: 'Maharashtra' },
    { abbreviation: 'Manipur', stateName: 'Manipur' },
    { abbreviation: 'Meghalaya', stateName: 'Meghalaya' },
    { abbreviation: 'Mizoram', stateName: 'Mizoram' },
    { abbreviation: 'Nagaland', stateName: 'Nagaland' },
    { abbreviation: 'Orissa', stateName: 'Orissa' },
    { abbreviation: 'Punjab', stateName: 'Punjab' },
    { abbreviation: 'Rajasthan', stateName: 'Rajasthan' },
    { abbreviation: 'Sikkim', stateName: 'Sikkim' },
    { abbreviation: 'Tamil Nadu', stateName: 'Tamil Nadu' },
    { abbreviation: 'Tripura', stateName: 'Tripura' },
    { abbreviation: 'Uttarakhand', stateName: 'Uttarakhand' },
    { abbreviation: 'Uttar Pradesh', stateName: 'Uttar Pradesh' },
    { abbreviation: 'WWest Bengal', stateName: 'West Bengal' },
    { abbreviation: 'Andaman and Nicobar Islands', stateName: 'Andaman and Nicobar Islands' },
    { abbreviation: 'Chandigarh', stateName: 'Chandigarh' },
    { abbreviation: 'Dadra and Nagar Haveli', stateName: 'Dadra and Nagar Haveli' },
    { abbreviation: 'Daman and Diu', stateName: 'Daman and Diu' },
    { abbreviation: 'Delhi', stateName: 'Delhi' },
    { abbreviation: 'Lakshadweep', stateName: 'Lakshadweep' },
    { abbreviation: 'Pondicherry', stateName: 'Pondicherry' },
    { abbreviation: 'Telangana', stateName: 'Telangana' },
    { abbreviation: 'Ladakh', stateName: 'Ladakh' },
];



allCountries = [
  {   code: 'Afghanistan', name: 'Afghanistan'}, 
  { code: 'AL',   name: 'Albania'  },
   { code: 'DZ', name: 'Algeria' },
   { code: 'AS',name: 'American Samoa' },
   {code: 'AD',name: 'Andorre'},
   { code: 'AO',name: 'Angola' },
   { code: 'AI',name: 'Anguilla' }, 
  {code: 'AQ', name: 'Antarctica'}, 
  { code: 'AG', name: 'Antigua and Barbuda'}, 
  {code: 'AR',name: 'Argentina'},
   {code: 'AM',name: 'Armenia'},
   { code: 'AW', name: 'Aruba' },
   {code: 'AU',name: 'Australia'},
   {code: 'AT', name: 'Austria' },
   { code: 'AZ', name: 'Azerbaijan'}, 
  { code: 'BS',name: 'Bahamas' },
   {code: 'BH', name: 'Bahrain'},
   { code: 'BD',name: 'Bangladesh'},
    {code: 'BB',name: 'Barbade'},
   {code: 'BY', name: 'Belarus' },
   {code: 'BE', name: 'Belgium'}, 
  { code: 'BZ',name: 'Belize'
  },
   { code: 'BJ', name: 'Benin'
  },
   { code: 'BM', name: 'Bermuda'
  },
   { code: 'BT',  name: 'Bhutan'
  },
   { code: 'BO', name: 'Bolivia'
  },
   {code: 'BQ',name: 'Bonaire, Sint Eustatius and Saba'
  },
   { code: 'BA', name: 'Bosnia and Herzegovina'
  },
   { code: 'BW',name: 'Botswana'
  }, 
  {code: 'BV',name: 'Bouvet Island'
  },
   { code: 'BR', name: 'Brazil'
  },
   {code: 'IO',name: 'British Indian Ocean Territory'
  },
   {
    code: 'VG',
    name: 'British Virgin Islands'
  }, {
    code: 'BN',
    name: 'Brunei'
  }, {
    code: 'BG',
    name: 'Bulgaria'
  }, {
    code: 'BF',
    name: 'Burkina Faso'
  }, {
    code: 'BI',
    name: 'Burundi'
  }, {
    code: 'KH',
    name: 'Cambodia'
  }, {
    code: 'CM',
    name: 'Cameroon'
  }, {
    code: 'CA',
    name: 'Canada'
  }, {
    code: 'CV',
    name: 'Cape Verde'
  }, {
    code: 'KY',
    name: 'Cayman Islands'
  }, {
    code: 'CF',
    name: 'Central African Republic'
  }, {
    code: 'TD',
    name: 'Chad'
  }, {
    code: 'CL',
    name: 'Chile'
  }, {
    code: 'CN',
    name: 'China'
  }, {
    code: 'CX',
    name: 'Christmas Island'
  }, {
    code: 'CC',
    name: 'Cocos (Keeling) Islands'
  }, {
    code: 'CO',
    name: 'Colombia'
  }, {
    code: 'KM',
    name: 'Comoros'
  }, {
    code: 'CG',
    name: 'Congo'
  }, {
    code: 'CD',
    name: 'Congo (Dem. Rep.)'
  }, {
    code: 'CK',
    name: 'Cook Islands'
  }, {
    code: 'CR',
    name: 'Costa Rica'
  }, {
    code: 'ME',
    name: 'Crna Gora'
  }, {
    code: 'HR',
    name: 'Croatia'
  }, {
    code: 'CU',
    name: 'Cuba'
  }, {
    code: 'CW',
    name: 'Cura??ao'
  }, {
    code: 'CY',
    name: 'Cyprus'
  }, {
    code: 'CZ',
    name: 'Czech Republic'
  }, {
    code: 'CI',
    name: "C??te D'Ivoire"
  }, {
    code: 'DK',
    name: 'Denmark'
  }, {
    code: 'DJ',
    name: 'Djibouti'
  }, {
    code: 'DM',
    name: 'Dominica'
  }, {
    code: 'DO',
    name: 'Dominican Republic'
  }, {
    code: 'TL',
    name: 'East Timor'
  }, {
    code: 'EC',
    name: 'Ecuador'
  }, {
    code: 'EG',
    name: 'Egypt'
  }, {
    code: 'SV',
    name: 'El Salvador'
  }, {
    code: 'GQ',
    name: 'Equatorial Guinea'
  }, {
    code: 'ER',
    name: 'Eritrea'
  }, {
    code: 'EE',
    name: 'Estonia'
  }, {
    code: 'ET',
    name: 'Ethiopia'
  }, {
    code: 'FK',
    name: 'Falkland Islands'
  }, {
    code: 'FO',
    name: 'Faroe Islands'
  }, {
    code: 'FJ',
    name: 'Fiji'
  }, {
    code: 'FI',
    name: 'Finland'
  }, {
    code: 'FR',
    name: 'France'
  }, {
    code: 'GF',
    name: 'French Guiana'
  }, {
    code: 'PF',
    name: 'French Polynesia'
  }, {
    code: 'TF',
    name: 'French Southern Territories'
  }, {
    code: 'GA',
    name: 'Gabon'
  }, {
    code: 'GM',
    name: 'Gambia'
  }, {
    code: 'GE',
    name: 'Georgia'
  }, {
    code: 'DE',
    name: 'Germany'
  }, {
    code: 'GH',
    name: 'Ghana'
  }, {
    code: 'GI',
    name: 'Gibraltar'
  }, {
    code: 'GR',
    name: 'Greece'
  }, {
    code: 'GL',
    name: 'Greenland'
  }, {
    code: 'GD',
    name: 'Grenada'
  }, {
    code: 'GP',
    name: 'Guadeloupe'
  }, {
    code: 'GU',
    name: 'Guam'
  }, {
    code: 'GT',
    name: 'Guatemala'
  }, {
    code: 'GG',
    name: 'Guernsey and Alderney'
  }, {
    code: 'GN',
    name: 'Guinea'
  }, {
    code: 'GW',
    name: 'Guinea-Bissau'
  }, {
    code: 'GY',
    name: 'Guyana'
  }, {
    code: 'HT',
    name: 'Haiti'
  }, {
    code: 'HM',
    name: 'Heard and McDonald Islands'
  }, {
    code: 'HN',
    name: 'Honduras'
  }, {
    code: 'HK',
    name: 'Hong Kong'
  }, {
    code: 'HU',
    name: 'Hungary'
  }, {
    code: 'IS',
    name: 'Iceland'
  }, {
    code: 'IN',
    name: 'India'
  }, {
    code: 'ID',
    name: 'Indonesia'
  }, {
    code: 'IR',
    name: 'Iran'
  }, {
    code: 'IQ',
    name: 'Iraq'
  }, {
    code: 'IE',
    name: 'Ireland'
  }, {
    code: 'IM',
    name: 'Isle of Man'
  }, {
    code: 'IL',
    name: 'Israel'
  }, {
    code: 'IT',
    name: 'Italy'
  }, {
    code: 'JM',
    name: 'Jamaica'
  }, {
    code: 'JP',
    name: 'Japan'
  }, {
    code: 'JE',
    name: 'Jersey'
  }, {
    code: 'JO',
    name: 'Jordan'
  }, {
    code: 'KZ',
    name: 'Kazakhstan'
  }, {
    code: 'KE',
    name: 'Kenya'
  }, {
    code: 'KI',
    name: 'Kiribati'
  }, {
    code: 'KP',
    name: 'Korea (North)'
  }, {
    code: 'KR',
    name: 'Korea (South)'
  }, {
    code: 'KW',
    name: 'Kuwait'
  }, {
    code: 'KG',
    name: 'Kyrgyzstan'
  }, {
    code: 'LA',
    name: 'Laos'
  }, {
    code: 'LV',
    name: 'Latvia'
  }, {
    code: 'LB',
    name: 'Lebanon'
  }, {
    code: 'LS',
    name: 'Lesotho'
  }, {
    code: 'LR',
    name: 'Liberia'
  }, {
    code: 'LY',
    name: 'Libya'
  }, {
    code: 'LI',
    name: 'Liechtenstein'
  }, {
    code: 'LT',
    name: 'Lithuania'
  }, {
    code: 'LU',
    name: 'Luxembourg'
  }, {
    code: 'MO',
    name: 'Macao'
  }, {
    code: 'MK',
    name: 'Macedonia'
  }, {
    code: 'MG',
    name: 'Madagascar'
  }, {
    code: 'MW',
    name: 'Malawi'
  }, {
    code: 'MY',
    name: 'Malaysia'
  }, {
    code: 'MV',
    name: 'Maldives'
  }, {
    code: 'ML',
    name: 'Mali'
  }, {
    code: 'MT',
    name: 'Malta'
  }, {
    code: 'MH',
    name: 'Marshall Islands'
  }, {
    code: 'MQ',
    name: 'Martinique'
  }, {
    code: 'MR',
    name: 'Mauritania'
  }, {
    code: 'MU',
    name: 'Mauritius'
  }, {
    code: 'YT',
    name: 'Mayotte'
  }, {
    code: 'MX',
    name: 'Mexico'
  }, {
    code: 'FM',
    name: 'Micronesia'
  }, {
    code: 'MD',
    name: 'Moldova'
  }, {
    code: 'MC',
    name: 'Monaco'
  }, {
    code: 'MN',
    name: 'Mongolia'
  }, {
    code: 'MS',
    name: 'Montserrat'
  }, {
    code: 'MA',
    name: 'Morocco'
  }, {
    code: 'MZ',
    name: 'Mozambique'
  }, {
    code: 'MM',
    name: 'Myanmar'
  }, {
    code: 'NA',
    name: 'Namibia'
  }, {
    code: 'NR',
    name: 'Nauru'
  }, {
    code: 'NP',
    name: 'Nepal'
  }, {
    code: 'NL',
    name: 'Netherlands'
  }, {
    code: 'AN',
    name: 'Netherlands Antilles'
  }, {
    code: 'NC',
    name: 'New Caledonia'
  }, {
    code: 'NZ',
    name: 'New Zealand'
  }, {
    code: 'NI',
    name: 'Nicaragua'
  }, {
    code: 'NE',
    name: 'Niger'
  }, {
    code: 'NG',
    name: 'Nigeria'
  }, {
    code: 'NU',
    name: 'Niue'
  }, {
    code: 'NF',
    name: 'Norfolk Island'
  }, {
    code: 'MP',
    name: 'Northern Mariana Islands'
  }, {
    code: 'NO',
    name: 'Norway'
  }, {
    code: 'OM',
    name: 'Oman'
  }, {
    code: 'PK',
    name: 'Pakistan'
  }, {
    code: 'PW',
    name: 'Palau'
  }, {
    code: 'PS',
    name: 'Palestine'
  }, {
    code: 'PA',
    name: 'Panama'
  }, {
    code: 'PG',
    name: 'Papua New Guinea'
  }, {
    code: 'PY',
    name: 'Paraguay'
  }, {
    code: 'PE',
    name: 'Peru'
  }, {
    code: 'PH',
    name: 'Philippines'
  }, {
    code: 'PN',
    name: 'Pitcairn'
  }, {
    code: 'PL',
    name: 'Poland'
  }, {
    code: 'PT',
    name: 'Portugal'
  }, {
    code: 'PR',
    name: 'Puerto Rico'
  }, {
    code: 'QA',
    name: 'Qatar'
  }, {
    code: 'RO',
    name: 'Romania'
  }, {
    code: 'RU',
    name: 'Russia'
  }, {
    code: 'RW',
    name: 'Rwanda'
  }, {
    code: 'RE',
    name: 'R??union'
  }, {
    code: 'BL',
    name: 'Saint Barth??lemy'
  }, {
    code: 'SH',
    name: 'Saint Helena'
  }, {
    code: 'KN',
    name: 'Saint Kitts and Nevis'
  }, {
    code: 'LC',
    name: 'Saint Lucia'
  }, {
    code: 'MF',
    name: 'Saint Martin'
  }, {
    code: 'PM',
    name: 'Saint Pierre and Miquelon'
  }, {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines'
  }, {
    code: 'WS',
    name: 'Samoa'
  }, {
    code: 'SM',
    name: 'San Marino'
  }, {
    code: 'SA',
    name: 'Saudi Arabia'
  }, {
    code: 'SN',
    name: 'Senegal'
  }, {
    code: 'RS',
    name: 'Serbia'
  }, {
    code: 'SC',
    name: 'Seychelles'
  }, {
    code: 'SL',
    name: 'Sierra Leone'
  }, {
    code: 'SG',
    name: 'Singapore'
  }, {
    code: 'SX',
    name: 'Sint Maarten'
  }, {
    code: 'SK',
    name: 'Slovakia'
  }, {
    code: 'SI',
    name: 'Slovenia'
  }, {
    code: 'SB',
    name: 'Solomon Islands'
  }, {
    code: 'SO',
    name: 'Somalia'
  }, {
    code: 'ZA',
    name: 'South Africa'
  }, {
    code: 'GS',
    name: 'South Georgia and the South Sandwich Islands'
  }, {
    code: 'SS',
    name: 'South Sudan'
  }, {
    code: 'ES',
    name: 'Spain'
  }, {
    code: 'LK',
    name: 'Sri Lanka'
  }, {
    code: 'SD',
    name: 'Sudan'
  }, {
    code: 'SR',
    name: 'Suriname'
  }, {
    code: 'SJ',
    name: 'Svalbard and Jan Mayen'
  }, {
    code: 'SZ',
    name: 'Swaziland'
  }, {
    code: 'SE',
    name: 'Sweden'
  }, {
    code: 'CH',
    name: 'Switzerland'
  }, {
    code: 'SY',
    name: 'Syria'
  }, {
    code: 'ST',
    name: 'S??o Tom?? and Pr??ncipe'
  }, {
    code: 'TW',
    name: 'Taiwan'
  }, {
    code: 'TJ',
    name: 'Tajikistan'
  }, {
    code: 'TZ',
    name: 'Tanzania'
  }, {
    code: 'TH',
    name: 'Thailand'
  }, {
    code: 'TG',
    name: 'Togo'
  }, {
    code: 'TK',
    name: 'Tokelau'
  }, {
    code: 'TO',
    name: 'Tonga'
  }, {
    code: 'TT',
    name: 'Trinidad and Tobago'
  }, {
    code: 'TN',
    name: 'Tunisia'
  }, {
    code: 'TR',
    name: 'Turkey'
  }, {
    code: 'TM',
    name: 'Turkmenistan'
  }, {
    code: 'TC',
    name: 'Turks and Caicos Islands'
  }, {
    code: 'TV',
    name: 'Tuvalu'
  }, {
    code: 'UG',
    name: 'Uganda'
  }, {
    code: 'UA',
    name: 'Ukraine'
  }, {
    code: 'AE',
    name: 'United Arab Emirates'
  }, {
    code: 'GB',
    name: 'United Kingdom'
  }, {
    code: 'UM',
    name: 'United States Minor Outlying Islands'
  }, {
    code: 'US',
    name: 'United States of America'
  }, {
    code: 'UY',
    name: 'Uruguay'
  }, {
    code: 'UZ',
    name: 'Uzbekistan'
  }, {
    code: 'VU',
    name: 'Vanuatu'
  }, {
    code: 'VA',
    name: 'Vatican City'
  }, {
    code: 'VE',
    name: 'Venezuela'
  }, {
    code: 'VN',
    name: 'Vietnam'
  }, {
    code: 'VI',
    name: 'Virgin Islands of the United States'
  }, {
    code: 'WF',
    name: 'Wallis and Futuna'
  }, {
    code: 'EH',
    name: 'Western Sahara'
  }, {
    code: 'YE',
    name: 'Yemen'
  }, {
    code: 'ZM',
    name: 'Zambia'
  },
   { code: 'ZW', name: 'Zimbabwe' },
   { code: 'AX',name: '??land Islands'}
];

private saveUsername: boolean = true;

selectable = true; 
removable = true;
addOnBlur = true;
readonly separatorKeysCodes = [ENTER, COMMA] as const;
fruits: Fruit[] = [
  {name: 'cricket'},
  {name: 'football'},
  {name: 'hockey'},
];

item:any

add(event: MatChipInputEvent): void {
  const value = (event.value || '').trim();

  if (value) {
    this.fruits.push({name: value});
  
  }

}

remove(fruit: Fruit): void {
  const index = this.fruits.indexOf(fruit);

  if (index >= 0) {
    this.fruits.splice(index, 1);
  }
}

  formatLabel(value: number) {
    if (value >= 61) {
      return Math.round(value / 61) ;
    }
    return value;
  }
   Age:number | undefined ;

  constructor(public dialogRef: MatDialogRef<any> ,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private homeService : HomeService ,
    private router: Router

  ) { 

    {
      this.registerForm = fb.group({
        id :  [  this.ObjRegisterModel.Id ],
        ProfileImage: [this.ObjRegisterModel.ProfileImage, [Validators.required] ],
        FirstName: [this.ObjRegisterModel.FirstName,[Validators.required, Validators.pattern("[A-Za-z]+"),
        Validators.minLength(2), Validators.maxLength(20)]],
        LastName: [ this.ObjRegisterModel.LastName, [Validators.required,
        Validators.minLength(2), Validators.maxLength(10)]],
        MobileNo: [ this.ObjRegisterModel.MobileNo,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    
        EmailId: [this.ObjRegisterModel.EmailId ,[Validators.required]],
        State: [ this.ObjRegisterModel.State,[Validators.required]],
        Country: [ this.ObjRegisterModel.Country,[Validators.required]],
        chek: [ ,[Validators.required]],
        Age: [ this.ObjRegisterModel.Age],

      });
  }

  }

  ngOnInit(){
    if(this.data.ObjRegisterModel){
    this.openDialogInMode = this.data.openDialogInMode;
    this.ObjRegisterModel = this.data.ObjRegisterModel;
    console.log('edit==>',this.ObjRegisterModel);
    this.url = this.ObjRegisterModel.ProfileImage;
    this.onBuildForm();
    }
  }

  onBuildForm(){
    this.fruits=[]
     this.fruits = this.ObjRegisterModel.Tag
    this.registerForm = this.fb.group({
      id :  [  this.ObjRegisterModel.id ],
      ProfileImage: [this.ObjRegisterModel.ProfileImage, [Validators.required] ],
      FirstName: [this.ObjRegisterModel.FirstName,[Validators.required, Validators.pattern("[A-Za-z]+"),
      Validators.minLength(2), Validators.maxLength(20)]],
      LastName: [ this.ObjRegisterModel.LastName, [Validators.required,
      Validators.minLength(2), Validators.maxLength(10)]],
      MobileNo: [ this.ObjRegisterModel.MobileNo,[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  
      EmailId: [this.ObjRegisterModel.EmailId ,[Validators.required,CustomValidator.email]],
      State: [ this.ObjRegisterModel.State,[Validators.required]],
      Country: [ this.ObjRegisterModel.Country,[Validators.required]],
      chek: [ ,[Validators.required]],
      Age: [this.ObjRegisterModel.Age],

    });
 
  }
  pitch(event: any) {
    this.Age = event.value
  }

  onSelectFile(event :any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      
      reader.onload = (event :any) => { 
        if (event.total < 310 * 325){
          this.url = event.target.result;
          }else{
            this.registerForm.get('ProfileImage')?.setErrors({
              ProfilePhoto :true
                    })
          }
        
      }
    }
  }
  onCancel(event :any){
    this.dialogRef.close();
  }

  onSave(){
  
    this.homeService.markAsTouched(this.registerForm.controls);

     if(this.registerForm.value.chek == true){
      if (this.registerForm.valid) {


      const objParams = this.registerForm.value;
      objParams['Age'] =  this.Age ;
      objParams['Tag'] =  this.fruits ;
     
      delete objParams['chek'] ;

      objParams['ProfileImage'] = this.url ;
      
      if(this.registerForm.value.id){
  
        this.homeService.updateUser(objParams).subscribe((Response)=> {
          alert(this.massage)

          this.dialogRef.close(Response);
     
           this.router.navigate(['/userprofile']);
           })

      }else{
      
       this.homeService.creatUser(objParams).subscribe((Response)=> {
          alert(this.massage)

          this.dialogRef.close(Response);
          
           this.router.navigate(['/userprofile']);
           })

         }
        }

     }
    }

}
function hihihihih(hihihihih: any) {
  throw new Error('Function not implemented.');
}

