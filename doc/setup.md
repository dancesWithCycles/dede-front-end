# Dede-map Setup

## Preparation

Use the following checklist to setup this service on
[Debian Bullseye](https://www.debian.org/releases/bullseye/)

* check out git repositories onto a development system and build the service for the production host as descirpted in the
[Quick Start Guide](../README.md#Quick-Start-Guide)

* enter project root folder to create archive of static web site and copy onto host system
```
cd dede-display
tar -czvf dist.tar.gz dist
scp -p <ssh port> dist.tar.gz  <user>@<host>.<domain>:/home/<user>/
```

* set up service environment on host system
```
sudo mkdir -p /var/www/dede-map
sudo tar -xzvf ~/dist.tar.gz -C /var/www/dede-map/
sudo mv /var/www/dede-map/dist/ /var/www/dede-map/public_html
```

## Apache Installation

* install Apache like [this](https://github.com/Software-Ingenieur-Begerad/setup/blob/main/doc/apache.md)

## Apache Proxy Setup

* enable apache proxy modules
```
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl restart apache2
systemctl status apache2
```

* create virtual host config file for this service
```
sudo touch /etc/apache2/sites-available/dede-rtm.conf
```

* configure virtual host file like this ```sudo vi dede-rtm.conf```

* adjust folder permissions
```
sudo chown -R begerad /var/www/dede-rtm
sudo chgrp -R www-data /var/www/dede-rtm
sudo chmod -R 750 /var/www/dede-rtm
sudo chmod g+s /var/www/dede-rtm
```

* diable old and enable new virtual host
```
sudo a2dissite 000-default
sudo a2ensite dede-rtm
sudo systemctl reload apache2
systemctl status apache2
```

* add apache virtual host port to the firewall (e.g. nftables or ufw)
