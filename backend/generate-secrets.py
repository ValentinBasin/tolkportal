import os
import base64


def generate_secret(length=16):
    return base64.b64encode(os.urandom(length)).decode("utf-8")


print("Generated Strapi Secrets:")
print("------------------------------------")

app_keys = [generate_secret() for _ in range(4)]
print(f"APP_KEYS={','.join(app_keys)}")

# API_TOKEN_SALT
print(f"API_TOKEN_SALT={generate_secret()}")

# ADMIN_JWT_SECRET
print(f"ADMIN_JWT_SECRET={generate_secret()}")

# TRANSFER_TOKEN_SALT
print(f"TRANSFER_TOKEN_SALT={generate_secret()}")

# JWT_SECRET
print(f"JWT_SECRET={generate_secret()}")

print("------------------------------------")
print("Add these to your environment variables or Secret Manager.")
