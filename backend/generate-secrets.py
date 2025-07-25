import os
import base64


def generate_secret(length=32):
    return base64.b64encode(os.urandom(length)).decode("utf-8")


print("Generated Strapi Secrets:")
print("------------------------------------")

app_keys = [generate_secret() for _ in range(4)]
print(f"APP_KEYS={','.join(app_keys)}")

print(f"API_TOKEN_SALT={generate_secret()}")

print(f"ADMIN_JWT_SECRET={generate_secret()}")

print(f"TRANSFER_TOKEN_SALT={generate_secret()}")

print(f"JWT_SECRET={generate_secret()}")

print("------------------------------------")
print("Add these to your environment variables or Secret Manager.")
