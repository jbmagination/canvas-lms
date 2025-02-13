import { setRootTranslations, setLazyTranslations } from '@canvas/i18n/mergeI18nTranslations.js';

setLazyTranslations(
  "en",
  "date",
  null,
  function() { return {"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"datepicker":{"column_headings":["Su","Mo","Tu","We","Th","Fr","Sa"]},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"days":{"today":"Today","today_lower":"today","tomorrow":"Tomorrow","yesterday":"Yesterday"},"formats":{"date_at_time":"%b %-d at %l:%M%P","default":"%Y-%m-%d","full":"%b %-d, %Y %-l:%M%P","full_with_weekday":"%a %b %-d, %Y %-l:%M%P","long":"%B %-d, %Y","long_with_weekday":"%A, %B %-d","medium":"%b %-d, %Y","medium_month":"%b %Y","medium_with_weekday":"%a %b %-d, %Y","short":"%b %-d","short_month":"%b","short_weekday":"%a","short_with_weekday":"%a, %b %-d","weekday":"%A"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]} }
)


setLazyTranslations(
  "en",
  "time",
  null,
  function() { return {"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M","tiny":"%l:%M%P","tiny_on_the_hour":"%l%P"},"pm":"pm"} }
)


setLazyTranslations(
  "en",
  "number",
  null,
  function() { return {"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{"ordinalized":{},"ordinals":{}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}} }
)


setLazyTranslations(
  "en",
  "datetime",
  null,
  function() { return {"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}} }
)


setLazyTranslations(
  "en",
  "support",
  null,
  function() { return {"array":{"last_word_connector":", and ","or":{"last_word_connector":", or ","two_words_connector":" or "},"two_words_connector":" and ","words_connector":", "},"help_menu":{"community_support_description":"Interact with and get assistance from your peers.","community_support_forums":"Community Support Forums","global_support_desk":"NetAcad Support","global_support_desk_description":"Our ASCs are your first line of support, and can connect you with our Global Support Desk for issues that require additional assistance.","networking_academy_description":"View Cisco answers to the most commonly asked questions.","networking_academy_faqs":"Networking Academy FAQs","student_support":"NetAcad Support - Student","student_support_description":"Your Instructor should be your first point of contact. They can answer your Networking Academy questions or contact the support desk for you. You can contact your instructor by using the Inbox feature.","support_desk_livechat":"Support Desk Live Chat"}} }
)
