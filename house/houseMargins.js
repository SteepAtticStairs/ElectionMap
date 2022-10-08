const houseMargins = {
    "AK-At-Large": -0.011,
    "AL-1": 0.96,
    "AL-2": 0.333,
    "AL-3": 0.379,
    "AL-4": 0.622,
    "AL-5": 0.314,
    "AL-6": 0.96,
    "AL-7": -0.255,
    "AR-1": 0.426,
    "AR-2": 0.174,
    "AR-3": 0.286,
    "AR-4": 0.379,
    "AZ-1": 0.076,
    "AZ-2": 0.041,
    "AZ-3": -0.464,
    "AZ-4": -0.036,
    "AZ-5": 0.268,
    "AZ-6": 0.103,
    "AZ-7": -0.263,
    "AZ-8": 1,
    "AZ-9": 1,
    "CA-1": 0.261,
    "CA-10": -0.737,
    "CA-11": -0.662,
    "CA-12": -0.744,
    "CA-13": -0.026,
    "CA-14": -0.385,
    "CA-15": -1,
    "CA-16": -1,
    "CA-17": -0.436,
    "CA-18": -0.375,
    "CA-19": -0.336,
    "CA-2": -0.425,
    "CA-20": 0.328,
    "CA-21": -0.089,
    "CA-22": -0.051,
    "CA-23": 0.172,
    "CA-24": -0.237,
    "CA-25": -0.105,
    "CA-26": -0.096,
    "CA-27": -0.027,
    "CA-28": -0.3,
    "CA-29": -1,
    "CA-3": 0.097,
    "CA-30": -1,
    "CA-31": -0.257,
    "CA-32": -0.364,
    "CA-33": -0.198,
    "CA-34": -1,
    "CA-35": -0.213,
    "CA-36": -0.375,
    "CA-37": -1,
    "CA-38": -0.227,
    "CA-39": -0.184,
    "CA-4": -0.322,
    "CA-40": 0.121,
    "CA-41": 0.065,
    "CA-42": -0.394,
    "CA-43": -0.583,
    "CA-44": -0.447,
    "CA-45": 0.013,
    "CA-46": -0.253,
    "CA-47": -0.039,
    "CA-48": 0.208,
    "CA-49": -0.031,
    "CA-5": 0.182,
    "CA-50": -0.245,
    "CA-51": -0.202,
    "CA-52": -0.338,
    "CA-6": -0.131,
    "CA-7": -0.341,
    "CA-8": -0.487,
    "CA-9": -0.034,
    "CO-1": -0.497,
    "CO-2": -0.309,
    "CO-3": 0.109,
    "CO-4": 0.258,
    "CO-5": 0.235,
    "CO-6": -0.131,
    "CO-7": -0.036,
    "CO-8": 0.051,
    "CT-1": -0.18,
    "CT-2": -0.022,
    "CT-3": -0.096,
    "CT-4": -0.199,
    "CT-5": -0.034,
    "DE-At-Large": -0.115,
    "FL-1": 0.27,
    "FL-10": -0.281,
    "FL-11": 0.193,
    "FL-12": 0.376,
    "FL-13": 0.092,
    "FL-14": -0.115,
    "FL-15": 0.076,
    "FL-16": 0.137,
    "FL-17": 0.221,
    "FL-18": 0.96,
    "FL-19": 0.258,
    "FL-2": 0.112,
    "FL-20": -0.441,
    "FL-21": 0.146,
    "FL-22": -0.115,
    "FL-23": -0.132,
    "FL-24": -0.531,
    "FL-25": -0.224,
    "FL-26": 0.146,
    "FL-27": 0.019,
    "FL-28": 0.097,
    "FL-3": 0.158,
    "FL-4": 0.133,
    "FL-5": 1,
    "FL-6": 0.96,
    "FL-7": 0.153,
    "FL-8": 0.23,
    "FL-9": -0.134,
    "GA-1": 0.202,
    "GA-10": 0.353,
    "GA-11": 0.306,
    "GA-12": 0.205,
    "GA-13": -0.507,
    "GA-14": 0.443,
    "GA-2": -0.022,
    "GA-3": 0.421,
    "GA-4": -0.464,
    "GA-5": -0.563,
    "GA-6": 0.319,
    "GA-7": -0.108,
    "GA-8": 0.382,
    "GA-9": 0.444,
    "HI-1": -0.282,
    "HI-2": -0.288,
    "IA-1": 0.039,
    "IA-2": 0.035,
    "IA-3": 0.029,
    "IA-4": 0.309,
    "ID-1": 0.527,
    "ID-2": 0.26,
    "IL-1": -0.366,
    "IL-10": -0.19,
    "IL-11": -0.078,
    "IL-12": 0.444,
    "IL-13": -0.049,
    "IL-14": -0.049,
    "IL-15": 0.155,
    "IL-16": 0.262,
    "IL-17": -0.057,
    "IL-2": -0.329,
    "IL-3": -0.348,
    "IL-4": -0.425,
    "IL-5": -0.32,
    "IL-6": -0.04,
    "IL-7": -1,
    "IL-8": -0.084,
    "IL-9": -0.392,
    "IN-1": -0.063,
    "IN-2": 0.345,
    "IN-3": 0.352,
    "IN-4": 0.323,
    "IN-5": 0.22,
    "IN-6": 0.439,
    "IN-7": -0.33,
    "IN-8": 0.351,
    "IN-9": 0.338,
    "KS-1": 0.332,
    "KS-2": 0.141,
    "KS-3": 0.029,
    "KS-4": 0.267,
    "KY-1": 0.416,
    "KY-2": 0.369,
    "KY-3": -0.171,
    "KY-4": 0.333,
    "KY-5": 0.574,
    "KY-6": 0.137,
    "LA-1": 0.388,
    "LA-2": -0.506,
    "LA-3": 0.416,
    "LA-4": 1,
    "LA-5": 0.332,
    "LA-6": 0.96,
    "MA-1": -0.267,
    "MA-2": -0.312,
    "MA-3": -0.271,
    "MA-4": -0.245,
    "MA-5": -0.451,
    "MA-6": -0.227,
    "MA-7": -0.712,
    "MA-8": -0.301,
    "MA-9": -0.143,
    "MD-1": 0.249,
    "MD-2": -0.087,
    "MD-3": -0.115,
    "MD-4": -0.741,
    "MD-5": -0.3,
    "MD-6": 0.013,
    "MD-7": -0.497,
    "MD-8": -0.561,
    "ME-1": -0.2,
    "ME-2": 0.02,
    "MI-1": 0.242,
    "MI-10": 0.047,
    "MI-11": -0.177,
    "MI-12": -0.438,
    "MI-13": -0.413,
    "MI-2": 0.305,
    "MI-3": -0.053,
    "MI-4": 0.099,
    "MI-5": 0.277,
    "MI-6": -0.18,
    "MI-7": -0.038,
    "MI-8": 0.009,
    "MI-9": 0.333,
    "MN-1": 0.098,
    "MN-2": -0.011,
    "MN-3": -0.163,
    "MN-4": -0.282,
    "MN-5": -0.601,
    "MN-6": 0.23,
    "MN-7": 0.36,
    "MN-8": 0.145,
    "MO-1": -0.538,
    "MO-2": 0.158,
    "MO-3": 0.356,
    "MO-4": 0.443,
    "MO-5": -0.174,
    "MO-6": 0.414,
    "MO-7": 0.462,
    "MO-8": 0.589,
    "MS-1": 0.381,
    "MS-2": -0.199,
    "MS-3": 0.276,
    "MS-4": 0.407,
    "MT-1": 0.093,
    "MT-2": 0.332,
    "NC-1": -0.071,
    "NC-10": 0.472,
    "NC-11": 0.132,
    "NC-12": -0.217,
    "NC-13": 0.04,
    "NC-14": -0.084,
    "NC-2": -0.208,
    "NC-3": 0.313,
    "NC-4": -0.305,
    "NC-5": 0.239,
    "NC-6": -0.083,
    "NC-7": 0.164,
    "NC-8": 0.369,
    "NC-9": 0.118,
    "ND-At-Large": 0.285,
    "NE-1": 0.175,
    "NE-2": 0.064,
    "NE-3": 0.548,
    "NH-1": -0.017,
    "NH-2": -0.057,
    "NJ-1": -0.188,
    "NJ-10": -0.629,
    "NJ-11": -0.098,
    "NJ-12": -0.344,
    "NJ-2": 0.099,
    "NJ-3": -0.069,
    "NJ-4": 0.279,
    "NJ-5": -0.05,
    "NJ-6": -0.09,
    "NJ-7": 0.037,
    "NJ-8": -0.46,
    "NJ-9": -0.175,
    "NM-1": -0.089,
    "NM-2": -0.02,
    "NM-3": -0.086,
    "NV-1": -0.033,
    "NV-2": 0.125,
    "NV-3": -0.007,
    "NV-4": -0.026,
    "NY-1": 0.062,
    "NY-10": -0.628,
    "NY-11": 0.071,
    "NY-12": -0.619,
    "NY-13": -1,
    "NY-14": -0.516,
    "NY-15": -0.646,
    "NY-16": -0.357,
    "NY-17": -0.067,
    "NY-18": -0.015,
    "NY-19": 0.012,
    "NY-2": 0.044,
    "NY-20": -0.115,
    "NY-21": 0.174,
    "NY-22": 0.007,
    "NY-23": 0.23,
    "NY-24": 0.22,
    "NY-25": -0.106,
    "NY-26": -0.152,
    "NY-3": -0.018,
    "NY-4": -0.078,
    "NY-5": -0.562,
    "NY-6": -0.273,
    "NY-7": -0.571,
    "NY-8": -0.469,
    "NY-9": -0.459,
    "OH-1": 0.027,
    "OH-10": 0.09,
    "OH-11": -0.432,
    "OH-12": 0.332,
    "OH-13": 0.037,
    "OH-14": 0.192,
    "OH-15": 0.275,
    "OH-2": 0.516,
    "OH-3": -0.31,
    "OH-4": 0.388,
    "OH-5": 0.295,
    "OH-6": 0.292,
    "OH-7": 0.239,
    "OH-8": 0.267,
    "OH-9": -0.048,
    "OK-1": 0.292,
    "OK-2": 0.528,
    "OK-3": 0.453,
    "OK-4": 0.341,
    "OK-5": 0.239,
    "OR-1": -0.302,
    "OR-2": 0.152,
    "OR-3": -0.475,
    "OR-4": -0.054,
    "OR-5": -0.012,
    "OR-6": -0.024,
    "PA-1": 0.042,
    "PA-10": 0.043,
    "PA-11": 0.283,
    "PA-12": -0.124,
    "PA-13": 1,
    "PA-14": 1,
    "PA-15": 1,
    "PA-16": 0.248,
    "PA-17": -0.036,
    "PA-2": -0.438,
    "PA-3": -1,
    "PA-4": -0.106,
    "PA-5": -0.228,
    "PA-6": -0.038,
    "PA-7": 0.049,
    "PA-8": 0.035,
    "PA-9": 0.404,
    "RI-1": -0.403,
    "RI-2": -0.052,
    "SC-1": 0.175,
    "SC-2": 0.202,
    "SC-3": 1,
    "SC-4": 0.267,
    "SC-5": 0.258,
    "SC-6": -0.224,
    "SC-7": 0.258,
    "SD-At-Large": 0.672,
    "TN-1": 0.627,
    "TN-2": 0.361,
    "TN-3": 0.348,
    "TN-4": 0.452,
    "TN-5": 0.071,
    "TN-6": 0.348,
    "TN-7": 0.242,
    "TN-8": 0.451,
    "TN-9": -0.382,
    "TX-1": 0.55,
    "TX-10": 0.317,
    "TX-11": 1,
    "TX-12": 0.317,
    "TX-13": 0.565,
    "TX-14": 0.342,
    "TX-15": 0.046,
    "TX-16": -0.366,
    "TX-17": 0.267,
    "TX-18": -0.359,
    "TX-19": 0.974,
    "TX-2": 0.394,
    "TX-20": -0.277,
    "TX-21": 0.333,
    "TX-22": 0.239,
    "TX-23": 0.206,
    "TX-24": 0.329,
    "TX-25": 0.96,
    "TX-26": 0.938,
    "TX-27": 0.404,
    "TX-28": -0.146,
    "TX-29": -0.311,
    "TX-3": 0.238,
    "TX-30": -0.567,
    "TX-31": 1,
    "TX-32": -0.236,
    "TX-33": -0.498,
    "TX-34": -0.084,
    "TX-35": -0.432,
    "TX-36": 0.447,
    "TX-37": -0.452,
    "TX-38": 0.365,
    "TX-4": 0.219,
    "TX-5": 0.318,
    "TX-6": 1,
    "TX-7": -0.312,
    "TX-8": 0.373,
    "TX-9": -0.492,
    "UT-1": 0.279,
    "UT-2": 0.221,
    "UT-3": 0.26,
    "UT-4": 0.298,
    "VA-1": 0.146,
    "VA-10": -0.059,
    "VA-11": -0.292,
    "VA-2": 0.018,
    "VA-3": -0.282,
    "VA-4": -0.264,
    "VA-5": 0.146,
    "VA-6": 0.276,
    "VA-7": -0.026,
    "VA-8": -0.422,
    "VA-9": 0.444,
    "VT-At-Large": -0.328,
    "WA-1": -0.219,
    "WA-10": -0.104,
    "WA-2": -0.154,
    "WA-3": 0.114,
    "WA-4": 0.314,
    "WA-5": 0.179,
    "WA-6": -0.112,
    "WA-7": -0.639,
    "WA-8": -0.009,
    "WA-9": -0.365,
    "WI-1": 0.108,
    "WI-2": -0.32,
    "WI-3": 0.105,
    "WI-4": -0.44,
    "WI-5": 0.324,
    "WI-6": 1,
    "WI-7": 0.272,
    "WI-8": 0.92,
    "WV-1": 0.341,
    "WV-2": 0.332,
    "WY-At-Large": 0.49
}