import { Doctor } from './../src/js/doctor.js';
import { Query } from './../src/js/query.js';

describe('Doctor', () => {

  let doctor;

  beforeEach(() => {
    const doctorObj = {
      "practices": [
        {
          "location_slug": "or-clackamas",
          "within_search_area": true,
          "distance": 8.773661321700025,
          "lat": 45.41217,
          "lon": -122.56874,
          "uid": "850c4c294d87545d4a6607089f4f2e53",
          "name": "Oregon Headache Clinic",
          "accepts_new_patients": true,
          "insurance_uids": [],
          "visit_address": {
            "city": "Clackamas",
            "lat": 45.41217,
            "lon": -122.56874,
            "state": "OR",
            "state_long": "Oregon",
            "street": "15259 SE 82nd Dr",
            "street2": "Ste 201B",
            "zip": "97015"
          },
          "office_hours": [],
          "phones": [
            {
              "number": "5036563120",
              "type": "fax"
            },
            {
              "number": "5036569844",
              "type": "landline"
            }
          ],
          "languages": [
            {
              "name": "English",
              "code": "en"
            }
          ]
        }
      ],
      "educations": [],
      "profile": {
        "first_name": "Christina",
        "middle_name": "E",
        "last_name": "Peterson",
        "slug": "christina-peterson-md",
        "title": "MD",
        "image_url": "https://asset3.betterdoctor.com/assets/general_doctor_female.png",
        "gender": "female",
        "languages": [
          {
            "name": "English",
            "code": "en"
          }
        ],
        "bio": "Dr. Christina Peterson, MD practices medicine at Clackamas, Oregon, specializing in neurology.\n\nDr. Peterson is licensed to see patients in Alaska and Oregon.\n\nIn addition to having active medical licenses, Dr. Peterson has successfully passed a background check including a medical license verification (active) and screening for malpractice history (none found)."
      },
      "ratings": [],
      "insurances": [],
      "specialties": [
        {
          "uid": "neurologist",
          "name": "Neurology",
          "description": "Specializes in the brain and nervous system.",
          "category": "medical",
          "actor": "Neurologist",
          "actors": "Neurologists"
        }
      ],
      "licenses": [
        {
          "number": "2839",
          "state": "AK"
        },
        {
          "number": "MD13675",
          "state": "OR"
        }
      ],
      "uid": "b8f946116d97e83bec031a10c0480de9",
      "npi": "1245394022"
        };
    doctor = new Doctor(doctorObj);
  });

  test('should consruct an organized doctor object from the large object recieved from the API', () => {
    expect(doctor.first).toEqual('Christina');
  });

  test('should convert phone number from ten digits together into (555) 555-5555 format', () => {
    expect(doctor.phone).toEqual('(503) 656-3120');
  });

});

describe('Query', () => {

  let query;

  beforeEach(() => {
    query = new Query('headache','Cara Rozell', 'Cara', 'Rozell', '97015', 'neurologist');
  });

  test('should construct a query object built with input data', () => {
    expect(query.query).toEqual('query=headache&');
    expect(query.docName).toEqual('name=Cara Rozell&');
    expect(query.specialty).toEqual('specialty_uid=neurologist&');
  });

});
