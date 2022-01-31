# Dede-realtime-map Setup

Use the following checklist to setup this service on
[Debian Bullseye](https://www.debian.org/releases/bullseye/)

* check out git repositories onto a development system and build the service for the production host as descirpted in the
[Quick Start Guide](../README.md#Quick-Start-Guide)

* enter project root folder to create archive of static web site and copy onto host system
```
cd dede-front-end
tar -czvf dist.tar.gz dist
scp dede-server.tar.gz  <user>@<host>.<domain>:/home/<user>/
```

* set up service environment on host system
```
sudo mkdir -p /var/www/dede-rtm
sudo tar -xzvf ~/dist.tar.gz -C /var/www/dede-rtm/
sudo mv /var/www/dede-rtm/dist/ /var/www/dede-rtm/public_html
```

* update host
```
sudo apt-get update
sudo apt-get upgrade
```

* install apache
```
sudo apt-get install apache2 --no-install-recommends
```

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

* add apache virtual hoste port to the firewall (e.g. nftables or ufw)
