#!/bin/bash

export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
# Load variables from file
if [ -f /etc/container.env ]; then
  set -a
  source /etc/container.env
  set +a
fi

# Postgres backup
TIMESTAMP=$(date +%Y-%m-%d-%H-%M-%S)
BACKUP_FILE="${DB_NAME}-${TIMESTAMP}.tar.gz"
BACKUP_PATH="/app"

pg_dump -h "${DB_HOST}" -U "${DB_USER}" "${DB_NAME}" | gzip >"${BACKUP_FILE}"
if [ $? -eq 0 ]; then
  echo "✅ Postgres dump completed successfully"
  aws s3 cp "${BACKUP_FILE}" "s3://${S3_BUCKET}/backups-db/${BACKUP_FILE}"
  rm "${BACKUP_FILE}"
else
  echo "❌ Postgres dump completed with error"
fi

# Mediafiles backup
BACKUP_FILE="Mediafiles-${TIMESTAMP}.tar.gz"
BACKUP_PATH="/app"

tar -czvf "$BACKUP_FILE" "$BACKUP_PATH"
if [ $? -eq 0 ]; then
  echo "✅ Mediafiles dump completed successfully"
  aws s3 cp "${BACKUP_FILE}" "s3://${S3_BUCKET}/backups-media/${BACKUP_FILE}"
  rm "${BACKUP_FILE}"
else
  echo "❌ Mediafiles dump completed with error"
fi
