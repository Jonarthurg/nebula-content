-- SELECT * FROM  get_fit_now_member as gfnm
-- JOIN get_fit_now_check_in as gfnci ON gfnci.membership_id=gfnm.id
-- JOIN person ON gfnm.person_id=person.id
-- JOIN drivers_license ON drivers_license.id=person.license_id
-- WHERE gfnci.check_in_date=20180109 AND gfnm.id LIKE "48Z%" AND drivers_license.plate_number LIKE "%H42W%"